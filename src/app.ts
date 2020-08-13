import { ApolloServer } from 'apollo-server';
import { resolvers } from './resolvers';
import { typeDefs } from './schema';
import { createStore } from './utils';

import { OrderManagementDb } from './dataSources/order-management-db/order-management-db';

// This is where we define the context type which is used
// to have correct typing when using context in the resolvers.
export interface Context {
  dataSources: {
    orderManagementDb: OrderManagementDb;
  };
}

// Initialize store connection (or creation at the point)
const store = createStore();

// This is where we define the dataSources which can be
// used to retrieve data from the resolvers.
const dataSources = (): Context['dataSources'] => {
  return {
    orderManagementDb: new OrderManagementDb({ store })
  };
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`); // tslint:disable-line no-console
});
