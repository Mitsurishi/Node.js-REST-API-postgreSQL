const db = require('../db')

class FilmGenreRepo {
    insertFilmGenre(filmId, genreId) {
        return db.query(`INSERT INTO film_genre (film_id, genre_id) values ($1, $2) RETURNING *`, [filmId, genreId])
    }
    selectFilmGenreById(id) {
        return db.query('SELECT genre.name FROM genre INNER JOIN film_genre ON film_genre.genre_id = genre.id WHERE film_genre.film_id = $1', [id]);
    }
    updateFilmGenre(film_id, genre_id, newGenre_id) {
        return db.query('UPDATE film_genre set genre_id = $3 where film_id = $1 AND genre_id = $2 RETURNING *', [film_id, genre_id, newGenre_id])
    }
    deleteFilmGenre(film_id, genre_id) {
        return db.query('DELETE FROM film_genre where film_id = $1 AND genre_id = $2', [film_id, genre_id])
    }
}

module.exports = new FilmGenreRepo();