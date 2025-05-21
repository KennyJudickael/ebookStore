import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

export const dbConnect = () => {
  mongoose
    .connect(uri)
    .then(() => console.log("db connected"))
    .catch((e) => console.log("db connection error", e.message));
};
