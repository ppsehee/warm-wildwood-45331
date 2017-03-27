'use strict';

var pool = require('../database/DatabaseConfiguration').pool;
var express = require('express');
var router = express.Router();

router.get('/dbtest', function (req, res) {    
    const sql = "SELECT * FROM info WHERE receiver = ? AND caller = ? ORDER BY time DESC";

    pool.getConnection.query('SELECT * FROM t_users', function (err, rows, fields) {
        if(err) {
            console.log('error: ', err);
            throw err;
        }
        response.send(['DB test', rows]);
    });
});

module.exports = router;