import { NextApiRequest, NextApiResponse } from "next";

import connectDB from "@/serverUtils/connectDB";
import { TTodo } from "@/types/todo";
import { methods } from "@/serverUtils/methods";
import { getTodoById } from "@/serverUtils/getTodoById";
import Todo from "@/models/todo";
import { getAllTodos } from "@/serverUtils/getAllTodos";

connectDB();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ todo?: TTodo; todos?: TTodo[] }>
) {
  const {
    method,
    query: { todoId },
    body,
  } = req;

  if (method === methods.GET) {
    const todo = await getTodoById(todoId);
    return res.status(200).json({ todo });
  } else if (method === methods.DELETE) {
    await Todo.findByIdAndDelete(todoId);
    const todos = await getAllTodos();
    return res.status(200).json({ todos });
  } else if (method === methods.PUT) {
    const todo = await getTodoById(todoId);
    if (body) {
      todo.title = body.title;
      todo.description = body.description;
      todo.isCompleted = body.isCompleted;
    } else {
      todo.isCompleted = !todo.isCompleted;
    }
    await todo.save();
    const todos = await getAllTodos();
    return res.status(201).json({ todos });
  }
}
