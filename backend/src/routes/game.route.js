const = gameController = require("../controllers/game.controller.js");
import { Router } from 'express';
const router = Router();

router.route('/').get(gameController.createGame);
router.route('/:id').get(gameController.getGameById);