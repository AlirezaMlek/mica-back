const { Model, DataTypes } = require('sequelize');
const sequelize = require('../repository/postgre-sql');
const Asset = require("./asset");
const Shop = require("./shop");


class Statue extends Model {}
Statue.init(
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
        scale: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: false,
            validate: {
            isSpecificLength(value) {
                    if (value.length !== 3) {
                        throw new Error('industryOfFocus must only have three items')
                    }
                }
            }
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
        modelName: 'Statue',
        tableName: 'statue'
    }
);


Statue.belongsTo(Asset, { foreignKey: 'asset_id' });
Statue.belongsTo(Shop, { foreignKey: 'shop_id' });

module.exports = Statue;