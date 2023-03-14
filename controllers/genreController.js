const genreRepo = require('../repos/genreRepo');

class GenreController {
    async createGenre(req, res) {
        try {
            let body = "";
            req.on("data", (chunk) => {
                body += chunk.toString();
            });
            req.on("end", async () => {
                const { name } = JSON.parse(body);
                const newGenre = await genreRepo.insertGenre(name);
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify(newGenre.rows));
            });
        } catch (error) {
            console.log(error);
        }
    }
    async getGenres(req, res) {
        const genres = await genreRepo.selectGenres();
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(genres.rows));
    }
    async getOneGenre(req, res) {
        try {
            const id = req.url.split("/")[3];
            const genre = await genreRepo.selectGenreById(id);
            if (genre.rowCount > 0) {
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify(genre.rows[0]));
            } else {
                throw new Error("Requested genre does not exist");
            }
        } catch (error) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: error })); //todo
        }
    }
    async updateGenre(req, res) {
        try {
            let body = "";
            req.on("data", (chunk) => {
                body += chunk.toString();
            });
            req.on("end", async () => {
                const { id, name } = JSON.parse(body);
                const genre = await genreRepo.updateGenre(name, id);
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify(genre.rows));
            });
        } catch (error) {
            console.log(error);
        }
    }
    async deleteGenre(req, res) {
        try {
            const id = req.url.split("/")[3];
            await genreRepo.deleteGenre(id);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: `Genre id: ${id} deleted sucessfully` }));
        } catch (error) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: error }));
        }
    }
}

module.exports = new GenreController();