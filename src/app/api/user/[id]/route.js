import { NextResponse } from "next/server";
import connect from "@/utils/db";
import User from "@/models/User";


export const GET = async (request, { params }) => {
  const { id } = params;
  await connect();
  const user = await User.findOne({ _id: id });
  return NextResponse.json({ user }, { status: 200 });

  // try {
  //   await connect();

  //   const user = await User.findById(id);

  //   return new NextResponse(JSON.stringify(user), { status: 200 });
  // } catch (err) {
  //   return new NextResponse("Database Error", { status: 500 });
  // }
};

export async function PUT(request, { params }) {
  const { id } = params;
  // const { nombre: nombre, apellido: apellido, cedula: cedula, email: email, password: password } = await request.json();
  const body = await request.json()
  console.log(body)
  console.log(id)
  try{

      await connect();
      await User.findByIdAndUpdate(id, body);
      // return NextResponse.json({ message: "user updated" }, { status: 200 });
      return new NextResponse("Actualizado", { status: 200 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  }


export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    await User.findByIdAndDelete(id);

    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

