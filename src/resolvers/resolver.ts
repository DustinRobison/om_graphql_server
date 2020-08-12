// TODO - create resolver functions
export const resolvers = {
  Query: {
    order: (_, args, ctx) => ctx.dataSources.orderManagementDb.getOrder(args),
    orders: (_, __, ctx) => ctx.dataSources.orderManagementDb.getOrders()
  },
  Mutation: {
    submitOrder: (_, args, ctx) =>
      ctx.dataSources.orderManagementDb.submitOrder(args)
  }
};
