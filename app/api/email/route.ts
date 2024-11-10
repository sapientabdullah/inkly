import { NextResponse } from "next/server";
import { connect } from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";

const db = async () => {
  await connect();
};
db();

export const POST = async (request: Request) => {
  const formData = await request.formData();
  const email = {
    email: `${formData.get("email")}`,
  };
  await EmailModel.create(email);
  return NextResponse.json({ success: true, msg: "Subscribed Successfully" });
};

export const GET = async () => {
  const emails = await EmailModel.find({});
  return NextResponse.json({ emails });
};

export const DELETE = async (request: Request) => {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  await EmailModel.findByIdAndDelete(id);
  return NextResponse.json({ success: true, msg: "Deleted Successfully" });
};
