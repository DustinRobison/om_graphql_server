import { gql } from 'apollo-server';

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
export const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.
  scalar Date
  scalar DateTime

  # This "Book" type can be used in other type declarations.
  type Book {
    title: String
    author: String
  }

  type Order {
    id: ID!
    orderLines: [OrderLineItem!]
    serviceLocation: Location
    customerRelationshipId: ID!
    paymentTransactionId: ID
    executionDate: DateTime
    state: String
  }

  type Location {
    latitude: Float
    longitude: Float
    addressLines: [String!]!
    city: String!
    regionOrState: String!
    zipOrPostCode: String
    isoCountryCode: ISOCountryCode!
  }

  type OrderLineItem {
    orderLineId: ID!
    serviceLocation: Location
    configuredProductType: ProductType!
    productInstanceId: ID
  }

  type ISOCountryCode {
    name: String!
    alphabeticThreeCharacterCode: String!
  }

  type ProductType {
    productTypeId: ID!
    name: String!
    description: String
    kind: String!
    characteristics: [Characteristic]
    prices: [Price]
    products: [ProductType]
  }

  type Characteristic {
    name: String!
    value: String
    valueType: String
  }

  type Price {
    name: String!
    description: String
    kind: String!
    recurrence: String!
    amount: Money!
    percentage: Float
    unitOfMeasure: String
  }

  type Money {
    value: Float
    currency: Currency
  }

  type Currency {
    name: String!
    alphabeticCode: String
    numericCode: Int
    majorUnitSymbol: String
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    book(id: Int!): Book
    books: [Book]
    order(id: ID!): Order
    orders: [Order]
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
export const resolvers = {
  Query: {
    book: (_, args, ctx) => ctx.dataSources.booksProvider.getBook(args),
    books: (_, __, ctx) => ctx.dataSources.booksProvider.getBooks(),
    order: (_, args, ctx) => ctx.dataSources.ordersProvider.getOrder(args),
    orders: (_, __, ctx) => ctx.dataSources.ordersProvider.getOrders()
  }
};
