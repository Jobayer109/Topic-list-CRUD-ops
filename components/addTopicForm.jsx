"use client";

import { useState } from "react";

const INIT_VALUE = {
  title: "",
  description: "",
};

const AddTopicForm = () => {
  const [formData, setFormData] = useState({ ...INIT_VALUE });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
          placeholder="Topic title"
          onChange={handleChange}
          className="px-4 py-3 bg-black border border-slate-700 outline-none rounded-md"
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
          className="px-4 py-3 bg-black border border-slate-700 outline-none rounded-md"
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
