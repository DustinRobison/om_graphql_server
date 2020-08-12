import { Sequelize, DataTypes } from 'sequelize';

export interface StoreInterface {
  db: Sequelize;
  Order: any;
  OrderLine: any;
  Location: any;
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
      customerRelationshipId: DataTypes.UUID,
      executionDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'new'
      }
    },
    {}
  );

  const OrderLine = db.define(
    'orderLine',
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID
      },
      orderId: {
        type: DataTypes.UUID,
        allowNull: false
      },
      serviceLocationId: DataTypes.UUID,
      configuredProductTypeId: DataTypes.UUID,
      productInstanceId: DataTypes.UUID
    },
    {}
  );

  const Location = db.define(
    'Location',
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID
      },
      latitude: DataTypes.FLOAT,
      longitude: DataTypes.FLOAT,
      addressLines: DataTypes.STRING,
      city: DataTypes.STRING,
      regionOrState: DataTypes.STRING,
      zipOrPostCode: DataTypes.STRING,
      isoCountryCode: DataTypes.STRING
    },
    {}
  );

  db.sync(); // Important for forcing changes in memory db (ie. loading db schema)
  return { db, Order, OrderLine, Location };
};
