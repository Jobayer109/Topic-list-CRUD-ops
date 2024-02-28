import toast from "react-hot-toast";

const getAllTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch all topics");
    }
    return res.json();
  } catch (error) {
    toast.error(error.message);
  }
};

export default getAllTopics;
