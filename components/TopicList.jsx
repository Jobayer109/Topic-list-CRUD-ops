import getAllTopics from "@/libs/getAllTopics";
import { FaEdit } from "react-icons/fa";
import RemoveTopic from "./removeTopic";

const TopicList = async () => {
  const topics = await getAllTopics();

  return (
    <div>
      {topics.map((topic) => (
        <div
          key={topic._id}
          className="flex justify-between bg-gray-900 p-4 rounded-lg my-3"
        >
          <div>
            <h2 className="text-xl text-slate-300 font-bold">{topic.title}</h2>
            <p className="text-slate-400">{topic.description}</p>
          </div>
          <div className="flex items-center gap-3">
            <RemoveTopic id={topic._id} />
            <FaEdit className="text-green-600 size-5" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopicList;
