"use client";

const UpdateTopicForm = () => {
  return (
    <div className="border border-gray-700 mt-5 p-3 rounded-md">
      <form>
        <div className="flex flex-col">
          <label htmlFor="title" className="text-slate-400">
            Topic
          </label>
          <input
            type="text"
            name="title"
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
