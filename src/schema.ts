import { gql } from 'apollo-server';

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
export const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.
  scalar DateTime

  input OrderInput {
    name: String
    orderLines: [OrderLineInput!]!
    serviceLocationId: ID
  }

  input OrderLineInput {
    productId: ID!
    quantity: Int
    serviceLocationId: ID
  }

  input LocationInput {
    latitude: Float
    longitude: Float
    streetAddress: String!
    city: String!
    regionOrState: String!
    zipOrPostCode: String
    isoCountryCode: String!
  }

  input ProductInput {
    name: String!
    description: String
    price: Float
  }

  type Order {
    id: ID!
    name: String
    orderLines: [OrderLine!]
    serviceLocation: Location
    state: String
    createdAt: DateTime
  }

  type OrderLine {
    id: ID!
    name: String
    serviceLocation: Location
    product: Product
    quantity: Int!
    createdAt: DateTime
  }

  type Location {
    id: ID!
    latitude: Float
    longitude: Float
    streetAddress: String!
    city: String!
    regionOrState: String!
    zipOrPostCode: String
    isoCountryCode: String!
  }

  type Product {
    id: ID!
    name: String!
    description: String
    price: Float
    createdAt: DateTime
  }

  type Query {
    order(id: ID!): Order
    orders: [Order]
    product(id: ID!): Product
    products: [Product]
    location(id: ID!): Location
    locations: [Location]
  }

  type Mutation {
    createOrder(order: OrderInput!): Order
    createProduct(product: ProductInput!): Product
    createLocation(location: LocationInput!): Location
  }
`;
