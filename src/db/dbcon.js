const mysql = require('mysql');


  const mysqlc=  mysql.createConnection({
        host: 'localhost',
        user: 'test',
        password: 'test123',
        database:"test"
    })

const conn =mysqlc.connect((err)=>{
    if(err){
        console.log(err);
        throw err;
    }else{
        console.log('db connected');
        return true;
    }
});


module.exports = {
    mysqlc,
    connection :conn
};