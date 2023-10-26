const { Model, DataTypes } = require('sequelize');
const sequelize = require('../repository/postgre-sql');

class Image extends Model {}
Image.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        pos: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: false,
            validate: {
                isSpecificLength(value) {
                    if (value.length !== 2) {
                        throw new Error('industryOfFocus must only have two items')
                    }
                }
            }
        },
        image: {
            type: DataTypes.BLOB,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'Image',
        tableName: 'image'
    }
);

module.exports = Image;