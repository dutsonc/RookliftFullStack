import { Router } from 'express';
import gameController from '../controllers/game.controller.js';
const router = Router();
router.route('/games').get(gameController.getGames);
router.route('/games/:id').get(gameController.getGameById);