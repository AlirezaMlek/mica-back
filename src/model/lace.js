const { Model, DataTypes } = require('sequelize');
const sequelize = require('../repository/postgre-sql');
const Asset = require("./asset");
const Shop = require("./shop");

class Lace extends Model {}
Lace.init(
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
        modelName: 'Lace',
        tableName: 'lace'
    }
);


Lace.belongsTo(Asset, { foreignKey: 'asset_id' });
Lace.belongsTo(Shop, { foreignKey: 'shop_id' });

module.exports = Lace;