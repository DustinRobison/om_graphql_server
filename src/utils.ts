import { Sequelize, DataTypes } from 'sequelize';

// TODO - NO ANY!!!
export interface StoreInterface {
  db: Sequelize;
  Order: any;
  OrderLine: any;
  Location: any;
  Product: any;
}

export const createStore = () => {
  const db = new Sequelize('sqlite::memory:');

  const Order = db.define(
    'Order',
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
        // @ts-ignore bad Sequelize typescript def i think
        defaultValue: Sequelize.UUIDV4
      },
      name: DataTypes.STRING,
      serviceLocationId: DataTypes.UUID,
      state: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'new'
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      }
    },
    {}
  );

  const OrderLine = db.define(
    'orderLine',
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
        // @ts-ignore bad Sequelize typescript def i think
        defaultValue: Sequelize.UUIDV4
      },
      orderId: {
        type: DataTypes.UUID,
        allowNull: false
      },
      serviceLocationId: DataTypes.UUID,
      productId: {
        type: DataTypes.UUID,
        allowNull: false
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      }
    },
    {}
  );

  const Location = db.define(
    'Location',
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
        // @ts-ignore bad Sequelize typescript def i think
        defaultValue: Sequelize.UUIDV4
      },
      latitude: DataTypes.FLOAT,
      longitude: DataTypes.FLOAT,
      streetAddress: DataTypes.STRING,
      city: DataTypes.STRING,
      regionOrState: DataTypes.STRING,
      zipOrPostCode: DataTypes.STRING,
      isoCountryCode: DataTypes.STRING,
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      }
    },
    {}
  );

  const Product = db.define(
    'Product',
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
        // @ts-ignore bad Sequelize typescript def i think
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: DataTypes.STRING,
      price: DataTypes.FLOAT,
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      }
    },
    {}
  );

  db.sync(); // Important for forcing changes in memory db (ie. loading db schema)
  return { db, Order, OrderLine, Location, Product };
};
