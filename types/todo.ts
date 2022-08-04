import { ObjectId } from "mongoose";

export type TTodo = {
  _id: ObjectId;
  title: string;
  description: string;
  isCompleted: boolean;
};
