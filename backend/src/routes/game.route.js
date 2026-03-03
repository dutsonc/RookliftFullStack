import { Router } from 'express';
import {getGames, getgameID} from '../controllers/game.controller.js';
const router = Router();
router.route('/games').get(getGames);
router.route('/games/:id').get(getgameID);
export default router;