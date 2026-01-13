import mongoose from 'mongoose';

const connectToDatabase = async () => {
  try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`\n Connected to MongoDB at ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process with failure
  }
}
export default connectToDatabase;