const { Model, DataTypes } = require('sequelize');
const sequelize = require('../repository/postgre-sql');
const Color = require('./color')
const Image = require('./image')

class Asset extends Model {}
Asset.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    },
    {
        sequelize,
        modelName: 'Asset',
        tableName: 'asset',
        timestamps: false
    }
);



const Asset_Color = sequelize.define('Asset_Color', {}, { timestamps: false });



Asset.belongsToMany(Color, { through: Asset_Color });
Color.belongsToMany(Asset, { through: Asset_Color });
Asset.hasMany(Image, { foreignKey: 'asset_id' });

module.exports = Asset;