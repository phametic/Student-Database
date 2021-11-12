var config = require('./dbconfig');
var mysql = require('mysql');
/*var connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password
});*/

async function getStudents() {
        let pool = await mysql.createPool(config);
        let students = await pool.query('SELECT * from Students', function(error, results, fields) {
            if(error) throw error;
            console.log('The solution is: ', results[0].solution);
        });
}