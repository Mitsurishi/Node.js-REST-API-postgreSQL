const db = require('../db')

class FilmRepo {
    insertFilm(name, year) {
        return db.query(`INSERT INTO film (name, year) values ($1, $2) RETURNING *`, [name, year])
    }
    selectFilms() {
        return db.query('SELECT * FROM film');
    }
    selectFilmById(id) {
        return db.query('SELECT * FROM film where id = $1', [id]);
    }
    updateFilm(name, year, id) {
        return db.query('UPDATE film set name = $1, year = $2 where id =$3 RETURNING *', [name, year, id])
    }
    deleteFilm(id) {
        return db.query('DELETE FROM film where id = $1', [id])
    }
}
module.exports = new FilmRepo();