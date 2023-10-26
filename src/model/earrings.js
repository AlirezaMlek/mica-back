const { Model, DataTypes } = require('sequelize');
const sequelize = require('../repository/postgre-sql');
const Asset = require("./asset");
const Shop = require("./shop");

class Earrings extends Model {}
Earrings.init(
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
        xScale: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'Earrings',
        tableName: 'earrings'
    }
);


Earrings.belongsTo(Asset, { foreignKey: 'asset_id' });
Earrings.belongsTo(Shop, { foreignKey: 'shop_id' });

module.exports = Earrings;