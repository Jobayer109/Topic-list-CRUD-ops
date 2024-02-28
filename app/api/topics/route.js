import dbConnection from "@/libs/config";
import Topic from "@/models/topicModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { title, description } = await request.json();
  await dbConnection();
  await Topic.create({ title, description });
  return NextResponse.json({ message: "New topic created" });
};

export const GET = async () => {
  const topics = await Topic.find();
  await dbConnection();
  return NextResponse.json(topics, { status: 200 });
};
