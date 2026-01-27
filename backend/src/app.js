import express from 'express';

const app = express(); // Create an instance of an Express application
app.use(express.json()); // Middleware to parse JSON request bodies


//Imports routes

import userRouter from './routes/auth.route.js';

//routes declaration

app.use('/api/v1/users', userRouter);
// https://localhost:5000/api/v1/users/register

export default app; // Export the app instance for use in other modules