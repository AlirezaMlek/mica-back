/** @type {import('jest').Config} */
const config = {
    collectCoverageFrom: [
        '**/*.{js}',
        '!**/node_modules/**',
        '!**/vendor/**',
    ],
};

module.exports = config;