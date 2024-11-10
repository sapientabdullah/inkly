"use client";
import TableItem from "@/components/admin/TableItem";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface Blog {
  _id: string;
  author: string;
  title: string;
  authorImage: string;
  date: string;
}

const Page = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data.blogs);
  };
  const deleteBlog = async (mongoId: string) => {
    const response = await axios.delete("/api/blog", {
      params: {
        id: mongoId,
      },
    });
    toast.success(response.data.msg);
    fetchBlogs();
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <div className="relative overflow-x-auto mt-4 border border-gray-400 rounded-md">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-sm text-gray-700 text-left uppercase bg-gray-50">
            <tr>
              <th scope="column" className="hidden sm:block px-6 py-3">
                Author name
              </th>
              <th scope="column" className="px-6 py-3">
                Title
              </th>
              <th scope="column" className="px-6 py-3">
                Date
              </th>
              <th scope="column" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => {
              return (
                <TableItem
                  key={index}
                  mongoId={blog._id}
                  author={blog.author}
                  title={blog.title}
                  authorImage={blog.authorImage}
                  date={blog.date}
                  deleteBlog={deleteBlog}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Page;
