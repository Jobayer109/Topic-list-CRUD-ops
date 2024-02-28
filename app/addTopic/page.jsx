"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const AddTopic = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      toast.error("Title and description are required");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
        router.refresh();
        toast.success("New topic created");
      } else {
        throw new Error("Failed to create task");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="border border-gray-700 mt-5 p-3 rounded-md">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="title" className="text-slate-400">
            Topic
          </label>
          <input
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
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
            onChange={(e) => setDescription(e.target.value)}
            className="px-4 py-3 bg-slate-800 border border-slate-700 outline-none rounded-md"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 mt-5 bg-green-500 rounded-md text-black font-semibold"
        >
          Add Topic
        </button>
      </form>
    </div>
  );
};

export default AddTopic;
