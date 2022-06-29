const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit:10,
    password:'password',
    user:'root',
    database:'MINI_PROJECT',
    host:'localhost',
    port:'3306'
});

let answerdb = {};

answerdb.all = () =>{
    return new Promise((resolve,reject)=>{
        pool.query("SELECT * FROM ANSWER;",(err,result)=>{
            if(err){
                return reject(err);
            }
                return resolve(result);
        });
    });
}

module.exports = answerdb;