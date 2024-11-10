"use client";
import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

interface Blog {
  _id: string;
  image: string;
  title: string;
  description: string;
  category: string;
  date: string;
  author: string;
}

const Hero = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data.blogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="mt-11 relative w-full">
      {blogs[blogs.length - 1] && (
        <Link href={`/blogs/${blogs[blogs.length - 1]._id}`}>
          <div className="w-full sm:w-96 h-96 overflow-hidden">
            <Image
              src={blogs[blogs.length - 1].image}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
        </Link>
      )}

      <div className="absolute bg-[#f9f9f9] w-12 h-12 top-0 right-0"></div>
      <div className="absolute bg-[#f9f9f9] w-12 h-12 top-0 right-24"></div>
      <div className="absolute bg-[#f9f9f9] w-12 h-12 top-12 right-12"></div>
      <div className="absolute bg-[#f9f9f9] w-12 h-12 top-24 right-0"></div>
      <div className="grid grid-cols-2 ml-4 absolute text-white bottom-8">
        {blogs[blogs.length - 1] && (
          <Link href={`/blogs/${blogs[blogs.length - 1]._id}`}>
            <div className="col-span-2">
              <h2
                className={`${cormorantGaramond.className} text-3xl font-extrabold`}
              >
                {blogs[blogs.length - 1].title}
              </h2>
              <p className="mt-4">
                {blogs[blogs.length - 1].description.slice(0, 100)}
              </p>
            </div>
          </Link>
        )}
        {blogs[blogs.length - 1] && (
          <div className="ml-4 mt-12 col-span-1 col-start-3 flex items-center">
            <div className="p-4 border-l-2 border-white justify-end">
              <h3 className="text-sm font-bold mb-2">Written by</h3>
              <p className="font-bold">{blogs[blogs.length - 1].author}</p>
            </div>
            <div className="p-4 border-l-2 border-white">
              <h3 className="text-sm font-bold mb-2">Date</h3>
              <p className="font-bold">
                {new Date(blogs[blogs.length - 1].date).toLocaleDateString()}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
