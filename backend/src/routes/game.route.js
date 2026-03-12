import { Router } from 'express';
import {getGames, getgameID} from '../controllers/game.controller.js';
const router = Router();
router.route('/games').get(getGames);
router.route('/games/:id').get(getgameID);
router.route('/games/white').get(getWhiteGames);
router.route('/games/black').get(getBlackGames);
export default router;