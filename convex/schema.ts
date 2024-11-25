import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

const schema = defineSchema({
  ...authTables,
  tasks: defineTable({
    userId: v.id("users"),
    text: v.string(),
    isCompleted: v.boolean(),
  }).index("by_userId", ["userId"]),
});

export default schema;
