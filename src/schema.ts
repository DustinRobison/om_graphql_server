import { gql } from 'apollo-server';

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
export const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.
  scalar Date
  scalar DateTime

  input OrderInput {
    orderLines: [OrderLineItemInput!]
    serviceLocation: LocationInput
    customerRelationshipId: ID!
    paymentTransactionId: ID
    executionDate: DateTime
  }

  input OrderLineItemInput {
    orderLineId: ID!
    serviceLocation: LocationInput
    configuredProductType: ProductTypeInput!
  }

  input LocationInput {
    latitude: Float
    longitude: Float
    addressLines: [String!]!
    city: String!
    regionOrState: String!
    zipOrPostCode: String
    isoCountryCode: ISOCountryCodeInput!
  }

  input ProductTypeInput {
    productTypeId: ID!
    name: String!
    description: String
    kind: String!
    characteristics: [CharacteristicInput]
    prices: [PriceInput]
    products: [ProductTypeInput]
  }

  input MoneyInput {
    value: Float
    currency: CurrencyInput
  }

  input CurrencyInput {
    name: String
    alphabeticCode: String
    numericCode: Int
  }

  input PriceInput {
    name: String!
    description: String
    kind: String!
    recurrence: String!
    amount: MoneyInput!
    percentage: Float
    unitOfMeasure: String
  }

  input ISOCountryCodeInput {
    name: String!
    alphabeticThreeCharacterCode: String!
  }

  input CharacteristicInput {
    name: String
    value: String
    valueType: String
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

  type Query {
    order(id: ID!): Order
    orders: [Order]
  }

  type Mutation {
    submitOrder(order: OrderInput!): Order
  }
`;
