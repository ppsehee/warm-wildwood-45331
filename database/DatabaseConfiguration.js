/**
 * Created by prChoe on 2016-08-16.
 */
var mysql = require('mysql');

var pool = mysql.createPool({
    host: 'wcwsbs.iptime.org',
    port: 10689,
    user: 'massivcode',
    password: 'cpr1763',
    database: 'joljak',
    connectionLimit: 3,
    waitForConnections: true,
    supportBigNumbers: true,
    bigNumberStrings: true
});

exports.pool = pool;