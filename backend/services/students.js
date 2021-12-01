const db = require('./database');
const helper = require('../helper');
const config = require('../dbconfig');

async function getMultiple(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        'SELECT id, first_name, last_name, age, grade, address, city, postal_code, phone_number FROM students LIMIT ?,?', 
        [offset + "", config.listPerPage + ""] 
        );
        /*'SELECT id, first_name, last_name, age, grade, address, city, postal_code, phone_number FROM students LIMIT ?,?', 
        [offset, config.listPerPage]);*/

    const data = helper.emptyOrRows(rows);
    const meta = {page};

    return {
        data,
        meta
    }
}

//POST
async function create(students) {
    const result = await db.query(
        `INSERT INTO students 
        (first_name, last_name, age, grade, address, city, postal_code, phone_number)
        VALUES
        (?, ?, ?, ?, ?, ?, ?, ?)`,
        [students.first_name, students.last_name, students.age, students.grade, students.address, students.city, students.postal_code, student.phone_number]
    );

    let message = "Error in creating programming langauge";

    if(result.affectedRows) {
        message = "Student created successfully";
    }

    return {message};
}

module.exports = {
    getMultiple,
    create
}