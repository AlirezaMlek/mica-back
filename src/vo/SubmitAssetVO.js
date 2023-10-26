const assert = require("assert");


class SubmitAssetVO {

    constructor(id, masks, poses, user, price, description, _name, assetType) {

        assert(typeof id === 'string', 'id should be a string');
        assert(typeof user === 'string', 'username should be a string');
        assert(typeof masks === 'object', 'username should be a string');
        assert(typeof poses === 'object', 'username should be a string');
        assert(typeof price === 'number', 'username should be a string');
        assert(typeof description === 'string', 'username should be a string');
        assert(typeof name === 'string', 'username should be a string');

        this.id = id;
        this.masks = masks;
        this.user = user;
        this.price = price;
        this.description = description;
        this.name = _name;
        this.assetType = assetType;
        this.poses = poses;

    }
}




class SubmitTemplateVO {

    constructor(id, masks, user, tag, assetType) {

        assert(typeof id === 'string', 'id should be a string');
        assert(typeof user === 'string', 'username should be a string');
        assert(typeof masks === 'object', 'username should be a string');
        assert(typeof tag === 'number', 'username should be a string');

        this.id = id;
        this.masks = masks;
        this.user = user;
        this.tag = tag;
        this.name = name;
        this.assetType = assetType;

    }
}




class SuggestedMasksAll {

    constructor(id, masks, user) {

        assert(typeof id === 'string', 'id should be a string');
        assert(typeof user === 'string', 'username should be a string');
        assert(typeof masks === 'object', 'username should be a string');
        assert(typeof tag === 'number', 'username should be a string');

        this.id = id;
        this.masks = masks;
        this.user = user;

    }

}


module.exports = {SubmitAssetVO, SubmitTemplateVO, SuggestedMasksAll}