import UpdateTopicForm from "@/components/updateTopicForm";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http:localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    console.log(res.json());
  } catch (error) {
    console.log(error.message);
  }
};

const UpdateTopic = async ({ params }) => {
  const { id } = params;
  console.log(id);
  const t = await getTopicById(id);
  console.log(t);
  return <UpdateTopicForm />;
};

export default UpdateTopic;
