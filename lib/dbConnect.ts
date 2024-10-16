import mongoose from "mongoose";

interface MongooseGlobal extends globalThis.Global {
  mongoose: {
    conn: mongoose.Mongoose | null;
    promise: Promise<mongoose.Mongoose> | null;
  };
}

declare const global: MongooseGlobal;

const cached = global.mongoose || { conn: null, promise: null };
const MONGODB_URI = process.env.MONGODB_URI;

export const dbConnect = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error("MongoDB URI is missing");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "next-events",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;
  return cached.conn;
};
