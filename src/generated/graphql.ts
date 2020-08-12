/* tslint:disable */
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Context } from '../index';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
};



export type Book = {
  __typename?: 'Book';
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
};

export type Order = {
  __typename?: 'Order';
  id: Scalars['ID'];
  orderLines?: Maybe<Array<OrderLineItem>>;
  serviceLocation?: Maybe<Location>;
  customerRelationshipId: Scalars['ID'];
  paymentTransactionId?: Maybe<Scalars['ID']>;
  executionDate?: Maybe<Scalars['DateTime']>;
  state?: Maybe<Scalars['String']>;
};

export type Location = {
  __typename?: 'Location';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  addressLines: Array<Scalars['String']>;
  city: Scalars['String'];
  regionOrState: Scalars['String'];
  zipOrPostCode?: Maybe<Scalars['String']>;
  isoCountryCode: IsoCountryCode;
};

export type OrderLineItem = {
  __typename?: 'OrderLineItem';
  orderLineId: Scalars['ID'];
  serviceLocation?: Maybe<Location>;
  configuredProductType: ProductType;
  productInstanceId?: Maybe<Scalars['ID']>;
};

export type IsoCountryCode = {
  __typename?: 'ISOCountryCode';
  name: Scalars['String'];
  alphabeticThreeCharacterCode: Scalars['String'];
};

export type ProductType = {
  __typename?: 'ProductType';
  productTypeId: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  kind: Scalars['String'];
  characteristics?: Maybe<Array<Maybe<Characteristic>>>;
  prices?: Maybe<Array<Maybe<Price>>>;
  products?: Maybe<Array<Maybe<ProductType>>>;
};

export type Characteristic = {
  __typename?: 'Characteristic';
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
  valueType?: Maybe<Scalars['String']>;
};

export type Price = {
  __typename?: 'Price';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  kind: Scalars['String'];
  recurrence: Scalars['String'];
  amount: Money;
  percentage?: Maybe<Scalars['Float']>;
  unitOfMeasure?: Maybe<Scalars['String']>;
};

export type Money = {
  __typename?: 'Money';
  value?: Maybe<Scalars['Float']>;
  currency?: Maybe<Currency>;
};

export type Currency = {
  __typename?: 'Currency';
  name: Scalars['String'];
  alphabeticCode?: Maybe<Scalars['String']>;
  numericCode?: Maybe<Scalars['Int']>;
  majorUnitSymbol?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  book?: Maybe<Book>;
  books?: Maybe<Array<Maybe<Book>>>;
  order?: Maybe<Order>;
};


export type QueryBookArgs = {
  id: Scalars['Int'];
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Book: ResolverTypeWrapper<Book>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Order: ResolverTypeWrapper<Order>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Location: ResolverTypeWrapper<Location>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  OrderLineItem: ResolverTypeWrapper<OrderLineItem>;
  ISOCountryCode: ResolverTypeWrapper<IsoCountryCode>;
  ProductType: ResolverTypeWrapper<ProductType>;
  Characteristic: ResolverTypeWrapper<Characteristic>;
  Price: ResolverTypeWrapper<Price>;
  Money: ResolverTypeWrapper<Money>;
  Currency: ResolverTypeWrapper<Currency>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Query: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  Book: Book;
  String: Scalars['String'];
  Order: Order;
  ID: Scalars['ID'];
  Location: Location;
  Float: Scalars['Float'];
  OrderLineItem: OrderLineItem;
  ISOCountryCode: IsoCountryCode;
  ProductType: ProductType;
  Characteristic: Characteristic;
  Price: Price;
  Money: Money;
  Currency: Currency;
  Int: Scalars['Int'];
  Query: {};
  Boolean: Scalars['Boolean'];
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type BookResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type OrderResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  orderLines?: Resolver<Maybe<Array<ResolversTypes['OrderLineItem']>>, ParentType, ContextType>;
  serviceLocation?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  customerRelationshipId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  paymentTransactionId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  executionDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type LocationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = {
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  addressLines?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  regionOrState?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zipOrPostCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isoCountryCode?: Resolver<ResolversTypes['ISOCountryCode'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type OrderLineItemResolvers<ContextType = Context, ParentType extends ResolversParentTypes['OrderLineItem'] = ResolversParentTypes['OrderLineItem']> = {
  orderLineId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  serviceLocation?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  configuredProductType?: Resolver<ResolversTypes['ProductType'], ParentType, ContextType>;
  productInstanceId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type IsoCountryCodeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ISOCountryCode'] = ResolversParentTypes['ISOCountryCode']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  alphabeticThreeCharacterCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ProductTypeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ProductType'] = ResolversParentTypes['ProductType']> = {
  productTypeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  characteristics?: Resolver<Maybe<Array<Maybe<ResolversTypes['Characteristic']>>>, ParentType, ContextType>;
  prices?: Resolver<Maybe<Array<Maybe<ResolversTypes['Price']>>>, ParentType, ContextType>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CharacteristicResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Characteristic'] = ResolversParentTypes['Characteristic']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  valueType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PriceResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Price'] = ResolversParentTypes['Price']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recurrence?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  unitOfMeasure?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MoneyResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Money'] = ResolversParentTypes['Money']> = {
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['Currency']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CurrencyResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Currency'] = ResolversParentTypes['Currency']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  alphabeticCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numericCode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  majorUnitSymbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  book?: Resolver<Maybe<ResolversTypes['Book']>, ParentType, ContextType, RequireFields<QueryBookArgs, 'id'>>;
  books?: Resolver<Maybe<Array<Maybe<ResolversTypes['Book']>>>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryOrderArgs, 'id'>>;
};

export type Resolvers<ContextType = Context> = {
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Book?: BookResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  Location?: LocationResolvers<ContextType>;
  OrderLineItem?: OrderLineItemResolvers<ContextType>;
  ISOCountryCode?: IsoCountryCodeResolvers<ContextType>;
  ProductType?: ProductTypeResolvers<ContextType>;
  Characteristic?: CharacteristicResolvers<ContextType>;
  Price?: PriceResolvers<ContextType>;
  Money?: MoneyResolvers<ContextType>;
  Currency?: CurrencyResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
