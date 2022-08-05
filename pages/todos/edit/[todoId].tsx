import React, { ChangeEvent, FormEvent, useState } from "react";
import { GetServerSideProps, NextPage } from "next";

import Input from "@/components/Input/Input";
import { useRouter } from "next/router";
import { editTodo } from "@/services/editTodo";
import { TTodo } from "@/types/todo";
import { getTodoById } from "@/serverUtils/getTodoById";

type EditTodoPageProps = {
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

const EditTodoPage = (props: EditTodoPageProps) => {
  const {
    todo: { _id, ...initialData },
  } = props;
  const [formData, setFormData] = useState(initialData);
  const router = useRouter();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name === "isCompleted"
          ? !formData.isCompleted
          : e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.title) {
      try {
        await editTodo(_id, formData);
        router.replace("/");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <main className="flex justify-center items-center min-h-[90vh]">
      <form
        className="flex flex-col bg-white dark:bg-slate-700 p-5 shadow rounded-md"
        onSubmit={handleSubmit}
      >
        <Input
          name="title"
          lbl="Title"
          type="text"
          onChange={handleChange}
          value={formData.title}
          placeholder="title"
        />
        <Input
          name="description"
          lbl="Description"
          type="textarea"
          onChange={handleChange}
          value={formData.description}
          optional
          placeholder="description"
        />
        <div>
          <input
            type="checkbox"
            name="isCompleted"
            id="isCompleted"
            onChange={handleChange}
            checked={formData.isCompleted}
          />
          <label htmlFor="isCompleted" className="dark:text-white ml-3">
            is completed?
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-500 px-5 py-2 text-white rounded-md ml-auto mt-5"
        >
          submit
        </button>
      </form>
    </main>
  );
};

export default EditTodoPage;
