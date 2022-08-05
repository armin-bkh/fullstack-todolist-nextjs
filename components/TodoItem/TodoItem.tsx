import React from "react";

import { BiTrash, BiPen, BiCheck, BiCircle } from "react-icons/bi";
import { TTodo } from "@/types/todo";
import Link from "next/link";
import { useRouter } from "next/router";

type TodoItemProps = {
  todo: TTodo;
  onDelete: () => void;
  onCheck: () => void;
};

function TodoItem(props: TodoItemProps) {
  const { todo, onDelete, onCheck } = props;

  const router = useRouter();

  return (
    <li className="bg-white dark:bg-slate-600 dark:text-white shadow-md mb-7 last:mb-0 px-5 py-2 flex justify-between items-center rounded-md">
      <Link href={`/todos/${todo._id}`}>
        <a
          className={`cursor-pointer flex-1 ${
            todo.isCompleted && "line-through"
          }`}
        >
          {todo.title}
        </a>
      </Link>
      <div className="flex">
        <button className="text-red-600 dark:text-red-700" onClick={onDelete}>
          <BiTrash />
        </button>
        <Link href={`/todos/edit/${todo._id}`}>
          <a className="text-green-500 dark:text-green-700 ml-3">
            <BiPen />
          </a>
        </Link>
        <button
          className="text-green-500 dark:text-green-700 ml-3"
          onClick={onCheck}
        >
          {todo.isCompleted ? <BiCheck /> : <BiCircle />}
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
