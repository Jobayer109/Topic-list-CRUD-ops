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
  await dbConnection();
  const topics = await Topic.find();
  return NextResponse.json(topics, { status: 200 });
};

export const DELETE = async (request) => {
  const id = request.nextUrl.searchParams.get("id");
  await dbConnection();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Topic is deleted successfully" },
    { status: 200 }
  );
};
