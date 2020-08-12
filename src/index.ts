import { ApolloServer } from 'apollo-server';

import { BooksProvider } from './providers/provider';
import { OrdersProvider } from './providers/orders';
import { resolvers, typeDefs } from './resolvers/resolver';

// This is where we define the context type which is used
// to have correct typing when using context in the resolvers.
export interface Context {
  dataSources: {
    booksProvider: BooksProvider;
    ordersProvider: OrdersProvider;
  };
}

// This is where we define the dataSources which can be
// used to retrieve data from the resolvers.
const dataSources = (): Context['dataSources'] => {
  return {
    booksProvider: new BooksProvider(),
    ordersProvider: new OrdersProvider()
  };
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
  typeDefs,
  // @ts-ignore (FIXME: should be casted to default Resolvers type?)
  resolvers,
  dataSources
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`); // tslint:disable-line no-console
});
