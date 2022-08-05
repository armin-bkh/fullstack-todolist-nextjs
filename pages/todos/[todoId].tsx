import React from "react";
import { GetServerSideProps } from "next";

import { getTodoById } from "@/serverUtils/getTodoById";
import { TTodo } from "@/types/todo";

type TodoDetailPageProps = {
  todo: TTodo;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { todoId } = context.query;
  const todo = await getTodoById(todoId);

  return {
    props: {
      todo: JSON.parse(JSON.stringify(todo)),
    },
  };
};

function TodoDetailPage(props: TodoDetailPageProps) {
  const { todo } = props;

  return (
    <main className="flex justify-center items-center min-h-[90vh]">
      <section className="bg-white shadow-md w-full md:w-1/3 rounded-md p-5">
        {todo.isCompleted && (
          <span className="text-violet-400 block text-right">completed</span>
        )}
        <div className="mb-7">
          <span className="mb-3">Title:</span>
          <p className="bg-slate-300 rounded-sm px-3 py-1">{todo.title}</p>
        </div>
        <div>
          <span className="mb-3">Description:</span>
          <p className="bg-slate-300 rounded-sm px-3 py-1">
            {todo.description}
          </p>
        </div>
      </section>
    </main>
  );
}

export default TodoDetailPage;
