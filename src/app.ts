import { ApolloServer } from 'apollo-server';
import { resolvers } from './resolvers/resolvers';
import { typeDefs } from './schema/schema';
import { addStoreSchema, createStore, dbLoadTestData } from './test/test-utils';

import { OrderManagementDb } from './dataSources/order-management-db/order-management-db';

// This is where we define the context type which is used
// to have correct typing when using context in the resolvers.
export interface Context {
  dataSources: {
    orderManagementDb: OrderManagementDb;
  };
}

// Initialize store connection (or creation at the point)
// TODO - map environments here to create store or use connected store
createStore()
  .then(addStoreSchema)
  .then(dbLoadTestData)
  .then((store) => {
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
  })
  .catch((error) => {
    console.log('Error with data source, server not started.'); // tslint:disable-line no-console
    console.log(error); // tslint:disable-line no-console
  });
