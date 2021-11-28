const mysql = require('mysql2');
require('dotenv').config();

const conn = mysql.createConnection({
    host: process.env.DB_LOCALHOST,
    user: process.env.DB_IDENTIFIANT,
    password: process.env.DB_PASSWORD,
    database: 'groupomania'
});

conn.connect(
    function (err) {
        if (err) {
            console.log("!!! Cannot connect !!!");
            throw err;
        } else {
            console.log("Connected.");
        }
    });
module.exports = conn;