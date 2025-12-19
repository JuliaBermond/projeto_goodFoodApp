import mongoose from "mongoose";

export async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log('connected');
  } catch (e) {
    console.log(`ERROR: ${e.message}`);
    process.exit(1)
  }
}
