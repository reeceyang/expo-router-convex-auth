import { userQuery } from "./customFunctions";

export const get = userQuery({
  args: {},
  handler: async ({ ctx, userId }) => {
    return await ctx.db.get(userId);
  },
});