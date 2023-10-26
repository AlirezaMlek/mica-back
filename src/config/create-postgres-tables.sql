
DROP TABLE IF EXISTS "image";
DROP TABLE IF EXISTS "jewel";
DROP TABLE IF EXISTS "statue";
DROP TABLE IF EXISTS "bracelet";
DROP TABLE IF EXISTS "earrings";
DROP TABLE IF EXISTS "necklace";
DROP TABLE IF EXISTS "lace";
DROP TABLE IF EXISTS "color";
DROP TABLE IF EXISTS "asset";
DROP TABLE IF EXISTS "shop";


CREATE TABLE IF NOT EXISTS "asset" (
    "id" SERIAL,
    PRIMARY KEY (id)
    );



CREATE TABLE IF NOT EXISTS "color" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL,
    "RGB" INTEGER[]
    );




CREATE TABLE IF NOT EXISTS "image" (
    id SERIAL PRIMARY KEY,
    "asset_id" INTEGER REFERENCES asset(id) ON DELETE CASCADE,
    pos INTEGER[],
    data BYTEA
);




CREATE TABLE IF NOT EXISTS "shop" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL,
    "owner" VARCHAR(50),
    "phone" VARCHAR(20),
    "email" VARCHAR(50),
    "description" TEXT,
    "logo" BYTEA
);




CREATE TABLE IF NOT EXISTS "jewel" (
    "id" SERIAL PRIMARY KEY,
    "asset_id" INTEGER REFERENCES asset(id) ON DELETE CASCADE,
    "name" VARCHAR(50) NOT NULL,
    "shop_id" INTEGER REFERENCES shop(id) ON DELETE CASCADE,
    "x-scale" INTEGER,
    "number" INTEGER,
    "price" DECIMAL(15,2),
    "description" TEXT
    );




CREATE TABLE IF NOT EXISTS "statue" (
    "id" SERIAL PRIMARY KEY,
    "asset_id" INTEGER REFERENCES asset(id) ON DELETE CASCADE,
    "name" VARCHAR(50) NOT NULL,
    "shop_id" INTEGER REFERENCES shop(id),
    "scale" INTEGER[],
    "number" INTEGER,
    "price" DECIMAL(15,2),
    "description" TEXT
    );




CREATE TABLE IF NOT EXISTS "bracelet" (
    "id" SERIAL PRIMARY KEY,
    "asset_id" INTEGER REFERENCES asset(id) ON DELETE CASCADE,
    "name" VARCHAR(50) NOT NULL,
    "x-scale" INTEGER,
    "number" INTEGER,
    "price" DECIMAL(15,2),
    "description" TEXT
    );




CREATE TABLE IF NOT EXISTS "earrings" (
    "id" SERIAL PRIMARY KEY,
    "asset_id" INTEGER REFERENCES asset(id) ON DELETE CASCADE,
    "name" VARCHAR(50) NOT NULL,
    "shop_id" INTEGER REFERENCES shop(id),
    "x-scale" INTEGER,
    "number" INTEGER,
    "price" DECIMAL(15,2),
    "description" TEXT
    );




CREATE TABLE IF NOT EXISTS "necklace" (
    "id" SERIAL PRIMARY KEY,
    "asset_id" INTEGER REFERENCES asset(id) ON DELETE CASCADE,
    "name" VARCHAR(50) NOT NULL,
    "shop_id" INTEGER REFERENCES shop(id),
    "x-scale" INTEGER,
    "number" INTEGER,
    "price" DECIMAL(15,2),
    "description" TEXT
    );




CREATE TABLE IF NOT EXISTS "lace" (
    "id" SERIAL PRIMARY KEY,
    "asset_id" INTEGER REFERENCES asset(id) ON DELETE CASCADE,
    "name" VARCHAR(50) NOT NULL,
    "shop_id" INTEGER REFERENCES shop(id),
    "length" INTEGER,
    "x-scale" INTEGER,
    "description" TEXT
    );
