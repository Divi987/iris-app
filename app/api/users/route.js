import { prisma } from "@/prisma/User";
import { NextResponse } from "next/server";
export const dynamic = 'force-dynamic';

export async function GET() {
  const users = await prisma.User.findMany();
  return NextResponse.json({ message: "Success", user: users });
}

export async function POST(req) {
  try {
    const body = await req.json();
    const userData = await prisma.User.create({
      data: body,
    });
    let json_response = {
      status: "success",
      data: {
        userData,
      },
    };
    return new NextResponse(JSON.stringify(json_response), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    let error_response = {
      status: "error",
      message: error.message,
    };
    return new NextResponse(JSON.stringify(error_response), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
