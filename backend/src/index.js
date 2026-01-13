import dotenv from 'dotenv';
import connectToDatabase from './config/database.js';
dotenv.config({
    path: './.env'
});

const startServer = async () => {
    try {
        await connectToDatabase();

        app.on('error', (error) => {
            console.error('Server error:', error);
            throw error;
        });

        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port:
                 ${process.env.PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
    }
}

    startServer();