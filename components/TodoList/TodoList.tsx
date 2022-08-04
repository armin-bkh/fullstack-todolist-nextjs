import React from "react";

import { TTodo } from "@/types/todo";
import TodoItem from "@/components/TodoItem/TodoItem";

type TodoListProps = {
  todos: TTodo[];
  onDelete: (id: number | string) => void;
  onCheck: (id: number | string) => void;
};

function TodoList(props: TodoListProps) {
  const { todos, onDelete, onCheck } = props;

  return (
    <section className="w-full md:w-2/5">
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            onDelete={() => onDelete(todo._id)}
            onCheck={() => onCheck(todo._id)}
          />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
