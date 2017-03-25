/**
 * Created by prChoe on 2016-08-16.
 */
var mysql = require('mysql');

var pool = mysql.createPool({
    host: 'us-cdbr-iron-east-03.cleardb.net', // <= 데이터베이스 URL 지정하세요
    port: 3306, // <= 데이터베이스 포트 숫자 지정하세요
    user: 'b2c128f126abf1', // <= 데이터베이스 계정명 입력하세요
    password:'ec9d7034', // <= 데이터베이스 비밀번호 입력하세요
    database: 'heroku_d5ad525434b9ef3', // <= 데이터베이스 스키마 이름 입력하세요
    connectionLimit: 3,
    waitForConnections: true,
    supportBigNumbers: true,
    bigNumberStrings: true
});

exports.pool = pool;