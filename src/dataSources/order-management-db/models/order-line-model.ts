import { Sequelize, DataTypes } from 'sequelize';

export const generateOrderLineModel = (db: Sequelize) => {
  return db.define(
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
};
