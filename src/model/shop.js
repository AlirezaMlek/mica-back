const { Model, DataTypes } = require('sequelize');
const sequelize = require('../repository/postgre-sql');

class Shop extends Model {}
Shop.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        owner: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        logo: {
            type: DataTypes.BLOB,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'Shop',
        tableName: 'shop'
    }
);

module.exports = Shop;