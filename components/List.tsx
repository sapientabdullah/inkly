import { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";

interface Blog {
  _id: string;
  image: string;
  title: string;
  description: string;
  category: string;
}

const List = () => {
  const [menu, setMenu] = useState("All");

  const [blogs, setBlogs] = useState<Blog[]>([]);

  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data.blogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div>
      <div className="flex justify-center gap-6 my-10 ">
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All" ? "bg-[#012a4a] text-white py-1 px-4 rounded-sm" : ""
          }
        >
          All
        </button>
        <button
          onClick={() => setMenu("Climate Change")}
          className={
            menu === "Climate Change"
              ? "bg-[#012a4a] text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          Climate Change
        </button>
        <button
          onClick={() => setMenu("Social Justice")}
          className={
            menu === "Social Justice"
              ? "bg-[#012a4a] text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          Social Justice
        </button>
        <button
          onClick={() => setMenu("Education Access")}
          className={
            menu === "Education Access"
              ? "bg-[#012a4a] text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          Education Access
        </button>
      </div>
      <div className="flex flex-wrap justify-around gap-2 gap-y-10 mb-16 xl:mx-24">
        {blogs
          .filter((blog) => (menu === "All" ? true : menu === blog.category))
          .map((blog, index) => {
            return (
              <Post
                key={index}
                id={blog._id}
                image={blog.image}
                title={blog.title}
                description={blog.description}
                category={blog.category}
              />
            );
          })}
      </div>
    </div>
  );
};
export default List;
