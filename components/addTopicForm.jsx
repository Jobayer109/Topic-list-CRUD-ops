"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const INIT_VALUE = {
  title: "",
  description: "",
};

const getAllTopics = async () => {
  try {
    const res = await fetch("http://localhost/3000/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
   
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const AddTopicForm = async () => {
  const [formData, setFormData] = useState({ ...INIT_VALUE });

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const topics = await getAllTopics();
    console.log(topics);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="title" className="text-slate-400">
          Topic
        </label>
        <input
          type="text"
          name="title"
          placeholder="write topic title here"
          onChange={handleChange}
          className="px-4 py-3 bg-slate-800 border border-slate-700 outline-none rounded-md"
        />
      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="description" className="text-slate-400">
          Description
        </label>
        <input
          type="text"
          name="description"
          onChange={handleChange}
          placeholder="write something about the topic ..."
          className="px-4 py-3 bg-slate-800 border border-slate-700 outline-none rounded-md"
        />
      </div>

      <div>
        <button
          type="submit"
          className="px-4 py-2 mt-5 bg-green-500 rounded-md text-black font-semibold"
        >
          Add Topic
        </button>
      </div>
    </form>
  );
};

export default AddTopicForm;
