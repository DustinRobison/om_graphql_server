import { Sequelize, DataTypes } from 'sequelize';

export const generateLocationModel = (db: Sequelize) => {
  return db.define(
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
};
