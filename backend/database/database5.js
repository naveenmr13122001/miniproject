const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit:10,
    password:'password',
    user:'root',
    database:'MINI_PROJECT',
    host:'localhost',
    port:'3306'
});

let storedtagsdb = {};

storedtagsdb.all = () =>{
    return new Promise((resolve,reject)=>{
        pool.query("SELECT TAGS_NAME FROM TAGS;",(err,result)=>{
            if(err){
                return reject(err);
            }
                return resolve(result);
        });
    });
}

module.exports = storedtagsdb;