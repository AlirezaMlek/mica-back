const redis = require('redis');
const config = require('../config/dev-config.json')


const redis_cli = redis.createClient({
    user: config.redis.user,
    password: config.redis.pass,
    host: config.redis.host,
    port: config.redis.port,
    database: config.redis.db
});

redis_cli.on('connect', () => {
    console.log('Connected to Redis');
});

redis_cli.on('error', (error) => {
    console.error('Redis connection error:', error);
});