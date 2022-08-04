import React from "react";

import { BiTrash, BiPen } from "react-icons/bi";
import { TTodo } from "@/types/todo";
import Link from "next/link";

type TodoItemProps = {
  todo: TTodo;
};

function TodoItem(props: TodoItemProps) {
  const { todo } = props;

  return (
    <li className="bg-white dark:bg-slate-600 dark:text-white shadow-md mb-7 last:mb-0 px-5 py-2 flex justify-between items-center rounded-md">
      <Link href={`/todos/${todo._id}`}>
        <a>{todo.title}</a>
      </Link>
      <div>
        <button className="text-red-600 dark:text-red-700">
          <BiTrash />
        </button>
        <button className="text-green-500 dark:text-green-700 ml-3">
          <BiPen />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
