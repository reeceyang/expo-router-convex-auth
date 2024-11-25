import {
  GenericActionCtx,
  GenericQueryCtx,
} from "convex/server";
import {
  /* eslint-disable no-restricted-imports */
  action,
  mutation,
  query,
  /* eslint-enable no-restricted-imports */
} from "./_generated/server";
import {
  customQuery,
  customAction,
  customCtx,
  customMutation,
} from "convex-helpers/server/customFunctions";
import { DataModel, Id } from "./_generated/dataModel";
import { getAuthUserId } from "@convex-dev/auth/server";

// Following https://stack.convex.dev/custom-functions

/** Return the logged in user's UserIdentity. Throw an error if the user is not authenticated. */
const getUserIdentity = async (
  ctx: GenericActionCtx<DataModel> | GenericQueryCtx<DataModel>
): Promise<Id<"users">> => {
  const userId = await getAuthUserId(ctx);
  if (userId === null) throw new Error("Authentication required");
  return userId;
};

export const userQuery = customQuery(
  query, // The base function we're extending
  // Here we're using a `customCtx` helper because our modification
  // only modifies the `ctx` argument to the function.
  customCtx(async (ctx) => {
    const userId = await getUserIdentity(ctx);
    // This new ctx will be applied to the function's.
    // The user is a new field
    return { userId, ctx };
  })
);

export const userAction = customAction(
  action,
  customCtx(async (ctx) => {
    const userId = await getUserIdentity(ctx);
    return { userId, ctx };
  })
);

export const userMutation = customMutation(
  mutation,
  customCtx(async (ctx) => {
    const userId = await getUserIdentity(ctx);
    return { userId, ctx };
  })
);