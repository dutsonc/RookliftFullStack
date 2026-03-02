const gameService = require("../services/game.service.js");
const getGames = async (req, res) => {
    try {  
        const games = await gameService.getAllGames();
        res.status(200).json(games);
    } catch (error) {
        res.status(500).json({ message: "Error fetching games", error: error.message });
    }
};

const getGameById = async (req, res) => {  
    try {
        const gameId = req.params.id;
        const game = await gameService.getGameById(gameId);
        if (!game) {
            return res.status(404).json({ message: "Game not found" });
        }
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json({ message: "Error fetching game", error: error.message });
    }
};
export { getGames, getGameById };

