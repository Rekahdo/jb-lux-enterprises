import { query } from "./_generated/server";

export const findAll = query({
  args: {},
  handler: async (ctx, args) => {
    return await ctx.db.query("products").order("desc").collect();
  },
});