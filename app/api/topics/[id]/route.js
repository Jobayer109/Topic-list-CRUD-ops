import dbConnection from "@/libs/config";
import Topic from "@/models/topicModel";
import { NextResponse } from "next/server";

export const PUT = async (request, { params }) => {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await dbConnection();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
};
