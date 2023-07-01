import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Profesor from "@/models/Profesor";

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    const user = await Profesor.findById(id);

    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    await Profesor.findByIdAndDelete(id);

    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};