import UpdateTopicForm from "@/components/updateTopicForm";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http:localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const UpdateTopic = async ({ params }) => {
  const { id } = params;
  const topic = await getTopicById(id);
  const { title, description } = topic.topic;
  return <UpdateTopicForm id={id} title={title} description={description} />;
};

export default UpdateTopic;
