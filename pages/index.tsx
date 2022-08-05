import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";

import { getAllTodos } from "@/serverUtils/getAllTodos";
import { TTodo } from "@/types/todo";
import TodoList from "@/components/TodoList/TodoList";
import { deleteTodo } from "@/services/deleteTodo";
import { checkTodo } from "@/services/checkTodo";
import connectDB from "@/serverUtils/connectDB";
import RenderIf from "@/components/RenderIf/RenderIf";
import { getSession } from "next-auth/react";
import { getTodos } from "@/services/getTodos";

export type HomePageProps = {
  todos: TTodo[];
  error?: string;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  connectDB();
  const session = await getSession(context);
  const todos = await getAllTodos();

  return {
    props: {
      todos: session ? JSON.parse(JSON.stringify(todos)) : null,
      error: !session ? "sorry you should login first" : null,
    },
  };
};

const HomePage = (props: HomePageProps) => {
  const { todos, error } = props;

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
      <RenderIf renderIf={!!todoList} renderElse={<p>{error}</p>}>
        <TodoList
          todos={todoList}
          onDelete={handleDeleteTodo}
          onCheck={handleCheckedTodo}
        />
      </RenderIf>
    </main>
  );
};

export default HomePage;
