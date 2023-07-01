import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/User";

export const GET = async (request) => {
  const url = new URL(request.url);

  const nombre = url.searchParams.get("nombre");

  try {
    await connect();

    const posts = await Post.find(nombre && { nombre });

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newPost = new Post(body);

  try {
    await connect();

    await newPost.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};