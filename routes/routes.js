const filmController = require('../controllers/filmController')
const genreController = require('../controllers/genreController')
const filmGenreController = require('../controllers/filmGenreController')

const router = async function (req, res) {
    if (req.url.match(/\/api\/film/)) {
        if (req.url === "/api/film" && req.method === "POST") {
            filmController.createFilm(req, res);
        }
        if (req.url === "/api/film" && req.method === "GET") {
            filmController.getFilms(req, res);
        }
        if (req.url.match(/\/api\/film\/([0-9]+)/) && req.method === "GET") {
            filmController.getOneFilm(req, res);
        }
        if (req.url.match(/\/api\/film\/([0-9]+)/) && req.method === "PUT") {
            filmController.updateFilm(req, res);
        }
        if (req.url.match(/\/api\/film\/([0-9]+)/) && req.method === "DELETE") {
            filmController.deleteFilm(req, res);
        }
    }
    if (req.url.match(/\/api\/genre/)) {
        if (req.url === "/api/genre" && req.method === "POST") {
            genreController.createGenre(req, res);
        }
        if (req.url === "/api/genre" && req.method === "GET") {
            genreController.getGenres(req, res);
        }
        if (req.url.match(/\/api\/genre\/([0-9]+)/) && req.method === "GET") {
            genreController.getOneGenre(req, res);
        }
        if (req.url.match(/\/api\/genre\/([0-9]+)/) && req.method === "PUT") {
            genreController.updateGenre(req, res);
        }
        if (req.url.match(/\/api\/genre\/([0-9]+)/) && req.method === "DELETE") {
            genreController.deleteGenre(req, res);
        }
    }
    if (req.url.match(/\/api\/film_genre/)) {
        if (req.url === "/api/film_genre" && req.method === "POST") {
            filmGenreController.createFilmGenre(req, res);
        }
        if (req.url === "/api/film_genre" && req.method === "PUT") {
            filmGenreController.updateFilmGenre(req, res);
        }
        if (req.url.match(/\/api\/film_genre\?film_id=([0-9]+)&genre_id=([0-9]+)/) && req.method === "DELETE") {
            filmGenreController.deleteFilmGenre(req, res);
        }
    }
};

module.exports = router;