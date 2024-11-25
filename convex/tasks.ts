import { v } from "convex/values";
import { userMutation, userQuery } from "./customFunctions";

export const get = userQuery({
  args: {},
  handler: async ({ ctx, userId }) => {
    return await ctx.db
      .query("tasks")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .collect();
  },
});

export const add = userMutation({
  args: { text: v.string() },
  handler: async ({ ctx, userId }, { text }) => {
    await ctx.db.insert("tasks", {
      userId,
      text,
      isCompleted: false,
    });
  },
});

export const setIsCompleted = userMutation({
  args: { taskId: v.id("tasks"), isCompleted: v.boolean() },
  handler: async ({ ctx, userId }, { taskId, isCompleted }) => {
    const task = await ctx.db.get(taskId);
    if (task === null) {
      throw new Error("Task not found");
    }
    if (task.userId !== userId) {
      throw new Error("Unauthorized");
    }
    await ctx.db.patch(taskId, { isCompleted });
  },
});
