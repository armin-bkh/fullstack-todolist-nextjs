import Todo from "@/models/todo";
import { ObjectId } from "mongoose";

export async function getTodoById(id: string | string[] | undefined) {
  return await Todo.findById(id);
}
