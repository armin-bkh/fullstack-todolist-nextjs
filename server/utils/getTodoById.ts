import Todo from "@/models/todo";

export async function getTodoById(id: string | string[] | undefined) {
  return await Todo.findById(id);
}
