import React, { ChangeEvent, FormEvent, useState } from "react";
import { NextPage } from "next";
import Input from "@/components/Input/Input";
import { postNewTodo } from "services/postNewTodo";

const initialData = {
  title: "",
  description: "",
};

const AddTodoPage: NextPage = () => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.title) {
      try {
        await postNewTodo(formData);
        setFormData(initialData);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <main className="flex justify-center items-center min-h-[90vh]">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <Input
          name="title"
          lbl="Title"
          type="text"
          onChange={handleChange}
          value={formData.title}
        />
        <Input
          name="description"
          lbl="Description"
          type="textarea"
          onChange={handleChange}
          value={formData.description}
          optional
        />
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

export default AddTodoPage;
