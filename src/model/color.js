const { Model, DataTypes } = require('sequelize');
const sequelize = require('../repository/postgre-sql');
class Color extends Model {}
Color.init(
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
        RGB: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: false,
            validate: {
                isSpecificLength(value) {
                    if (value.length !== 3) {
                        throw new Error('industryOfFocus must only have three items')
                    }
                }
            }

        }
    },
    {
        sequelize,
        modelName: 'Color',
        tableName: 'color',
        timestamps: false
    }
);

module.exports = Color;