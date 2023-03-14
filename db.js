const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    password: '1029384756',
    host: 'localhost',
    port: 5432,
    database: 'simple_movie_database'
})
module.exports = pool