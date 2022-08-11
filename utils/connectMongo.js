import mongoose from "mongoose";

// if (!process.env.MONGODB_URI) {
//   throw new Error("Please add your Mongo URI to .env.local");
// }

const connectMongo = async () => mongoose.connect(process.env.MONGODB_URI);

export default connectMongo;
