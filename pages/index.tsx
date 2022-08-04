import { GetServerSideProps, NextPage } from "next";

import { useTheme } from "@/containers/Providers/ThemeProvider";
import { getAllTodos } from "@/serverUtils/getAllTodos";
import { TTodo } from "@/types/todo";
import TodosList from "@/components/TodosList/TodosList";

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

  return (
    <main className="flex justify-center items-center h-[90vh] p-5">
      <TodosList todos={todos} />
    </main>
  );
};

export default HomePage;
