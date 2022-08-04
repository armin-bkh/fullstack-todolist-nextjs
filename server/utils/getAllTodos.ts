import Todo from "@/models/todo";

export async function getAllTodos() {
  return await Todo.find({});
}
