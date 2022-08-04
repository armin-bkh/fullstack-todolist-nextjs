import { NextApiRequest, NextApiResponse } from "next";

import connectDB from "@/serverUtils/connectDB";
import { TTodo } from "@/types/todo";
import { methods } from "@/serverUtils/methods";
import { getTodoById } from "@/serverUtils/getTodoById";

connectDB();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ todo: TTodo }>
) {
  const {
    method,
    query: { todoId },
  } = req;

  if (method === methods.GET) {
    const todo = await getTodoById(todoId);
    return res.status(200).json({ todo });
  }
}
