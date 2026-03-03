import express from 'express';
import cors from 'cors';

const app = express(); // Create an instance of an Express application
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cors()); // Enable CORS for all routes


//Imports routes

import userRouter from './routes/auth.route.js';
import gameRouter from './routes/game.route.js';

//routes declaration

app.use('/api/v1/users', userRouter);
// https://localhost:5000/api/v1/users/register
app.use('/api/v1', gameRouter);
// https://localhost:5000/api/v1/games




export default app; // Export the app instance for use in other modules
