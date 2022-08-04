import mongoose from "mongoose";

type TConnection = {
  isConnected?: number;
};

const connection: TConnection = {};

export default async function connectDB() {
  if (connection?.isConnected) {
    return;
  }
  const db = await mongoose.connect(process.env.DB_URI!);

  connection.isConnected = db.connections[0].readyState;
}
