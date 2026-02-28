import mongoose, { Schema } from "mongoose";

const gameSchema = new Schema({
  whitePlayer: String,
  blackPlayer: String,
  whiteRating: Number,
  blackRating: Number,
  result: String,
  pgn: String,
  id: Number,
  datePlayed: Date,