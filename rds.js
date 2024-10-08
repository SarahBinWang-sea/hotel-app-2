var mysql = require('mysql');

var rdsUrl = 'hotel-app-database-instance-1.c7wag26ca0nr.us-west-2.rds.amazonaws.com';
var password =  '12345678';
var user = 'admin';

// mysql connection pool
var rdsPool = mysql.createPool({
    connectionLimit : 12,
    host: rdsUrl,
    password: password,
    user: user
});

module.exports.pool = rdsPool;
module.exports.url = rdsUrl
