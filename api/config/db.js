import mongoose from "mongoose";
import colors from "colors"

const connectDB = async () => {
  try {

    const conn=await mongoose.connect(process.env.MONGO_URI)
    console.log(`Successfully connected to MONGODB ${conn.connection.host}`.bgMagenta.white)
    
  } catch (error) {
    console.log(`Error in mongoDb :${error}` .bgRed.black);
  }
};

export default connectDB 