const filmRepo = require('../repos/filmRepo');
const filmGenreRepo = require('../repos/filmGenreRepo');

class FilmController {
    async createFilm(req, res) {
        try {
            let body = "";
            req.on("data", (chunk) => {
                body += chunk.toString();
            });
            req.on("end", async () => {
                const { name, year } = JSON.parse(body);
                const newFilm = await filmRepo.insertFilm(name, year);
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify(newFilm.rows));
            });
        } catch (error) {
            console.log(error);
        }
    }
    async getFilms(req, res) {
        const films = await filmRepo.selectFilms();
        let filmsData = [];
        for (let film of films.rows) {
            let filmData = await this.getFilm(film);
            filmsData.push(filmData);
        }
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(filmsData));
    }
    async getOneFilm(req, res) {
        try {
            const id = req.url.split("/")[3];
            const film = await filmRepo.selectFilmById(id);
            if (film.rowCount > 0) {
                let filmData = await this.getFilm(film.rows[0]);
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify(filmData));
            } else {
                throw new Error("Requested film does not exist");
            }
        } catch (error) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: error })); //todo
        }
    }
    async updateFilm(req, res) {
        try {
            let body = "";
            req.on("data", (chunk) => {
                body += chunk.toString();
            });
            req.on("end", async () => {
                const { id, name, year } = JSON.parse(body);
                const film = await filmRepo.updateFilm(name, year, id);
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify(film.rows));
            });
        } catch (error) {
            console.log(error);
        }
    }
    async deleteFilm(req, res) {
        try {
            const id = req.url.split("/")[3];
            await filmRepo.deleteFilm(id);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: `Film id: ${id} deleted sucessfully` }));
        } catch (error) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: error }));
        }
    }
    async getFilm(filmFromDb) {
        let filmData = {};
        filmData.year = filmFromDb.year;
        filmData.name = filmFromDb.name;
        const genres = await filmGenreRepo.selectFilmGenreById(filmFromDb.id)
        let genresArray = [];
        for (let genre of genres.rows) {
            genresArray.push(genre.name);
        }
        filmData.genres = genresArray;
        return filmData;
    }
}


module.exports = new FilmController();