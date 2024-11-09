import { NextResponse } from "next/server";
import { connect } from "@/lib/config/db";
import { writeFile } from "fs/promises";
import BlogModel from "@/lib/models/BlogModel";
import fs from "fs";

export const GET = async (request: Request) => {
  const url = new URL(request.url);
  const blogId = url.searchParams.get("id");
  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json({ blog });
  } else {
    const blogs = await BlogModel.find({});
    return NextResponse.json({ blogs });
  }
};

export const POST = async (request: Request) => {
  try {
    await connect();
    const formData = await request.formData();
    const timestamp = Date.now();
    const image = formData.get("image");
    if (!(image instanceof File)) {
      return NextResponse.json(
        { error: "Invalid image file" },
        { status: 400 }
      );
    }
    const imageByteData = await image.arrayBuffer();
    const imageBuffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path, imageBuffer);
    const imgUrl = `/${timestamp}_${image.name}`;

    const blogData = {
      title: `${formData.get("title")}`,
      description: `${formData.get("description")}`,
      category: `${formData.get("category")}`,
      author: `${formData.get("author")}`,
      image: imgUrl,
      authorImage: `${formData.get("authorImage")}`,
    };

    await BlogModel.create(blogData);
    console.log("Blog saved");

    return NextResponse.json({ success: true, msg: "Blog Added" });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json(
      { error: "Server error while creating blog" },
      { status: 500 }
    );
  }
};

export const DELETE = async (request: Request) => {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  const blog = await BlogModel.findById(id);
  fs.unlink(`./public${blog.image}`, () => {});
  await BlogModel.findByIdAndDelete(id);
  return NextResponse.json({ success: true, msg: "Blog Deleted" });
};
