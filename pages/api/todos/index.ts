import { NextApiRequest, NextApiResponse } from "next";

import Todo from "@/models/todo";
import { TTodo } from "@/types/todo";
import { methods } from "@/serverUtils/methods";
import { getAllTodos } from "@/serverUtils/getAllTodos";
import connectDB from "@/serverUtils/connectDB";
import { getSession } from "next-auth/react";

connectDB();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ todos?: TTodo[]; message?: string }>
) {
  const { method, body } = req;
  const session = await getSession({ req });

  if (!session) {
    return res.status(400).json({ message: "sorry you should login first" });
  }

  if (method === methods.GET) {
    const todos = await getAllTodos();

    return res.status(200).json({ todos });
  } else if (method === methods.POST) {
    await Todo.create({ title: body.title, description: body.description });

    const todos = await getAllTodos();
    return res.status(201).json({ todos });
  }
}
