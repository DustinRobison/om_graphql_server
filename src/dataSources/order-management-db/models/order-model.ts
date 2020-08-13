import { Sequelize, DataTypes } from 'sequelize';

export const generateOrderModel = (db: Sequelize) => {
  return db.define(
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
};
