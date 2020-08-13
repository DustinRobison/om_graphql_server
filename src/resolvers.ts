// TODO - create resolver functions
export const resolvers = {
  Query: {
    order: (_, args, ctx) => ctx.dataSources.orderManagementDb.getOrder(args),
    orders: (_, __, ctx) => ctx.dataSources.orderManagementDb.getOrders(),
    product: (_, args, ctx) =>
      ctx.dataSources.orderManagementDb.getProduct(args),
    products: (_, __, ctx) => ctx.dataSources.orderManagementDb.getProducts(),
    location: (_, args, ctx) =>
      ctx.dataSources.orderManagementDb.getLocation(args),
    locations: (_, __, ctx) => ctx.dataSources.orderManagementDb.getLocations()
  },
  Mutation: {
    createOrder: (_, args, ctx) =>
      ctx.dataSources.orderManagementDb.createOrder(args),
    createProduct: (_, args, ctx) =>
      ctx.dataSources.orderManagementDb.createProduct(args),
    createLocation: (_, args, ctx) =>
      ctx.dataSources.orderManagementDb.createLocation(args)
  }
};
