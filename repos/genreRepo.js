const db = require('../db')

class GenreRepo {
    insertGenre(name) {
        return db.query(`INSERT INTO genre (name) values ($1) RETURNING *`, [name])
    }
    selectGenres() {
        return db.query('SELECT * FROM genre');
    }
    selectGenreById(id) {
        return db.query('SELECT * FROM genre where id = $1', [id]);
    }
    updateGenre(name, id) {
        return db.query('UPDATE genre set name = $1 where id = $2 RETURNING *', [name, id])
    }
    deleteGenre(id) {
        return db.query('DELETE FROM genre where id = $1', [id])
    }
}
module.exports = new GenreRepo();