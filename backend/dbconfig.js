const env = process.env;

const config = {
    db: {
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'studentdb',
        port: 3306
    },
    listPerPage: 10,
}

module.exports = config;