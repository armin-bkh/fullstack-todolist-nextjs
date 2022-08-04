import React from "react";

import { TTodo } from "@/types/todo";
import TodoItem from "@/components/TodoItem/TodoItem";

type TodosListProps = {
  todos: TTodo[];
};

function TodosList(props: TodosListProps) {
  const { todos } = props;

  return (
    <section className="w-full md:w-2/5">
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} />
        ))}
      </ul>
    </section>
  );
}

export default TodosList;
