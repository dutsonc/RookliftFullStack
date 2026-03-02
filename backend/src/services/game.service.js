import { Game } from "../models/game.model.js";
import { Chess } from "chess.js";
export const getGameById = async (gameId) => {
    return Game.findById(gameId);
};
export const getAllGames = async () => {
    return Game.find();
};
