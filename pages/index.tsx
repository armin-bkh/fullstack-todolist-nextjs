import { useState } from "react";
import { GetServerSideProps, NextPage } from "next";

import { useTheme } from "@/containers/Providers/ThemeProvider";
import { getAllTodos } from "@/serverUtils/getAllTodos";
import { TTodo } from "@/types/todo";
import TodoList from "@/components/TodoList/TodoList";
import { deleteTodo } from "@/services/deleteTodo";
import { checkTodo } from "@/services/checkTodo";

export type HomePageProps = {
  todos: TTodo[];
};

export const getServerSideProps: GetServerSideProps = async () => {
  const todos = await getAllTodos();

  return {
    props: {
      todos: JSON.parse(JSON.stringify(todos)),
    },
  };
};

const HomePage = (props: HomePageProps) => {
  const { todos } = props;

  const [todoList, setTodoList] = useState(todos);

  const handleDeleteTodo = async (id: number | string) => {
    try {
      const { data } = await deleteTodo(id);
      setTodoList(data.todos);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckedTodo = async (id: number | string) => {
    try {
      const { data } = await checkTodo(id);
      setTodoList(data.todos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="flex justify-center items-center h-[90vh] p-5">
      <TodoList
        todos={todoList}
        onDelete={handleDeleteTodo}
        onCheck={handleCheckedTodo}
      />
    </main>
  );
};

export default HomePage;
