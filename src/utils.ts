import { ModelCtor, Sequelize } from 'sequelize';
import { generateOrderModel } from './dataSources/order-management-db/models/order-model';
import { generateOrderLineModel } from './dataSources/order-management-db/models/order-line-model';
import { generateLocationModel } from './dataSources/order-management-db/models/location-model';
import { generateProductModel } from './dataSources/order-management-db/models/product-model';

// TODO - NO ANY!!!
export interface StoreInterface {
  db: Sequelize;
  Order: ModelCtor<any>;
  OrderLine: ModelCtor<any>;
  Location: ModelCtor<any>;
  Product: ModelCtor<any>;
}

export const createStore = () => {
  const db = new Sequelize('sqlite::memory:');
  const Order = generateOrderModel(db);
  const OrderLine = generateOrderLineModel(db);
  const Location = generateLocationModel(db);
  const Product = generateProductModel(db);

  db.sync(); // Important for forcing changes in memory db (ie. loading db schema)
  return { db, Order, OrderLine, Location, Product };
};
