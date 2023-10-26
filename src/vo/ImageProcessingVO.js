const assert = require("assert");


class ImageProcessingVO {

    constructor(id, image, assetType, user, tag) {

        assert(typeof id === 'string', 'id should be a string');
        assert(typeof user === 'string', 'username should be a string');
        assert(typeof image === 'object', 'username should be a string');
        assert(typeof tag === 'number', 'username should be a string');

        this.id = id;
        this.image = image;
        this.assetType = assetType;
        this.user = user;
    }
}



class MasksResponseVO {

    constructor(id, masks, user, tag) {

        assert(typeof id === 'string', 'id should be a string');
        assert(typeof user === 'string', 'username should be a string');
        assert(typeof masks === 'object', 'username should be a string');
        assert(typeof tag === 'number', 'username should be a string');

        this.id = id;
        this.masks = masks;
        this.user = user;
        this.tag = tag
    }
}



class ImageReceived {
    constructor(id, user, tag) {

        assert(typeof id === 'string', 'id should be a string');
        assert(typeof user === 'string', 'username should be a string');
        assert(typeof tag === 'number', 'username should be a string');

        this.id = id;
        this.user = user;
        this.tag = tag;
        this.message = 'image {} received'
    }
}


module.exports = { ImageProcessingVO, MasksResponseVO, ImageReceived };