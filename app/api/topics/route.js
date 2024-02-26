import dbConnection from "@/libs/config";
import Topic from "@/models/topic";

export const POST = async (request) => {
  const { title, description } = await request.json();
  await dbConnection();
  await Topic.create({ title, description });
};
