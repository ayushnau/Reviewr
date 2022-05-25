const mysql = require('mysql2');


const db = mysql.createConnection({
    host:'localhost',
    port: "3306",
    user:'root',
    password:'7060205259',
    database:'cruddatabase'
});
db.connect((err) => {
    console.log('Connected!');
  });

  module.exports= db;