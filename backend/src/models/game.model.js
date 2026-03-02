import mongoose, { Schema } from "mongoose";

const gameSchema = new Schema({
  whitePlayer: {String},
  blackPlayer: {String},
  whiteRating: {Number},
  blackRating: {Number},
  result: {String, required: true},
  pgn: {String, required: true},
  id: {Number, required: true, unique: true},
  datePlayed: {Date, required: true},
  lichessGameId: {String},
});
export const Game = mongoose.model("Game", gameSchema);