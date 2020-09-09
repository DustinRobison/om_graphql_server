import { Sequelize } from 'sequelize';
import { generateOrderModel } from '../dataSources/order-management-db/models/order-model';
import { generateOrderLineModel } from '../dataSources/order-management-db/models/order-line-model';
import { generateLocationModel } from '../dataSources/order-management-db/models/location-model';
import { generateProductModel } from '../dataSources/order-management-db/models/product-model';
import { StoreInterface } from '../dataSources/order-management-db/order-management-db';

export const createStore = async (): Promise<Sequelize> => {
  return new Sequelize('sqlite::memory:', { logging: false });
};

export const addStoreSchema = async (
  db: Sequelize
): Promise<StoreInterface> => {
  // Load each model
  const Order = generateOrderModel(db);
  const OrderLine = generateOrderLineModel(db);
  const Location = generateLocationModel(db);
  const Product = generateProductModel(db);

  await db.sync(); // This creates the table if it doesn't exist (and does nothing if it already exists)
  return { db, Order, OrderLine, Location, Product };
};

export const dbLoadTestData = async (
  store: StoreInterface
): Promise<StoreInterface> => {
  const products = await store.Product.bulkCreate(
    require('./data/products.json')
  );
  const locations = await store.Location.bulkCreate(
    require('./data/locations.json')
  );
  await store.Order.create({
    name: 'First Order In The History Of The World',
    serviceLocationId: locations[0].id,
    orderLines: [
      {
        serviceLocationId: locations[0].id,
        productId: products[0].id
      }
    ]
  });

  return store;
};
