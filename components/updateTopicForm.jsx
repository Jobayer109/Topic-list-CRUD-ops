"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const UpdateTopicForm = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch");
      }
      router.push("/");
      router.refresh();
      toast.success("Topic is updated now");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border border-gray-700 mt-5 p-3 rounded-md">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="title" className="text-slate-400">
            New Topic
          </label>
          <input
            type="text"
            name="title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="px-4 py-3 bg-slate-800 border border-slate-700 outline-none rounded-md"
          />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="description" className="text-slate-400">
            New Description
          </label>
          <input
            type="text"
            name="description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="px-4 py-3 bg-slate-800 border border-slate-700 outline-none rounded-md"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 mt-5 bg-green-500 rounded-md text-black font-semibold"
        >
          Update Topic
        </button>
      </form>
    </div>
  );
};

export default UpdateTopicForm;
