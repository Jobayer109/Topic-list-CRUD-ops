const getAllTopics = async () => {
  const res = await fetch("http://localhost:3000/api/topics", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Error occurred in fetching tasks");
  }
  return res.json();
};

export default getAllTopics;
