const Asset = require('../src/model/asset');
const Color = require('../src/model/color');
const sequelize = require('../src/repository/postgre-sql');
const Shop = require('../src/model/shop');
const Bracelet = require('../src/model/bracelet');



beforeEach(async () => {
    await sequelize.sync({ force: true });
});




test('add asset and colors to data base (many-to-many association)', async () => {

    const my_asset = await Asset.create();

    const color1 = await Color.create({'name': 'red', 'RGB':[255, 0, 0]});
    const color2 = await Color.create({'name': 'green', 'RGB':[0, 255, 0]});

    await my_asset.addColor(color1, { through: { selfGranted: false } });
    await my_asset.addColor(color2, { through: { selfGranted: false } });


    const result = await Asset.findOne({
        where: { id: 1 },
        include: Color
    })

    console.log('***************************************')
    console.log(result);

})



test('add asset, shop, and bracelet to database (one-to-many association)', async () => {

        const my_asset = await Asset.create();

        const my_shop = await Shop.create({'name': 'my shop', 'address': 'my address', 'phone': 'my phone'
        , 'email': 'my email', 'description': 'my description', 'logo': 'my logo', 'owner': 'me'});

        const my_bracelet = await Bracelet.create({'name': 'my bracelet', 'xScale': 1, 'number': 1, 'price': 1.00});

        await my_bracelet.setAsset(my_asset);
        await my_bracelet.setShop(my_shop);

        const result = await Bracelet.findOne({
            where: { id: 1 },
            include: [Asset, Shop]
        })

        console.log('***************************************')
        console.log(result);
});