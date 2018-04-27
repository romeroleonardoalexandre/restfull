const mysqlServer = require('mysql');

const connection = mysqlServer.createConnection({
    host: 'localhost',
    user: 'localhost',
    password: 'localhost',
    database: 'restfull_ws'
});

const categoryModule = require('./categories')({ connection });

module.exports = {
    categories: () => categoryModule
}
