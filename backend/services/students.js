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

module.exports = {
    getMultiple
}