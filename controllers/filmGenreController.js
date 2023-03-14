const filmGenreRepo = require('../repos/filmGenreRepo');

class FilmGenreController {
    async createFilmGenre(req, res) {
        try {
            let body = "";
            req.on("data", (chunk) => {
                body += chunk.toString();
            });
            req.on("end", async () => {
                const { film_id, genre_id } = JSON.parse(body);
                const newFilmGenre = await filmGenreRepo.insertFilmGenre(film_id, genre_id);
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify(newFilmGenre.rows));
            });
        } catch (error) {
            console.log(error);
        }
    }
    async updateFilmGenre(req, res) {
        try {
            let body = "";
            req.on("data", (chunk) => {
                body += chunk.toString();
            });
            req.on("end", async () => {
                const { film_id, genre_id, newGenre_id } = JSON.parse(body);
                const filmGenre = await filmGenreRepo.updateFilmGenre(film_id, genre_id, newGenre_id);
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify(filmGenre.rows));
            });
        } catch (error) {
            console.log(error);
        }
    }
    async deleteFilmGenre(req, res) {
        try {
            const film_id = req.url.match(/film_id=([0-9]+)/)[1];
            const genre_id = req.url.match(/genre_id=([0-9]+)/)[1];
            await filmGenreRepo.deleteFilmGenre(film_id, genre_id);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: `Genre id: ${genre_id} deleted sucessfully from film id: ${film_id}` }));
        } catch (error) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: error }));
        }
    }
}

module.exports = new FilmGenreController();