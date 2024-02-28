import toast from "react-hot-toast";

const createTopic = async (title, description, router) => {
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

export default createTopic;
