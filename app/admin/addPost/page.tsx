"use client";

import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import { toast } from "react-toastify";

const Page = () => {
  const [image, setImage] = useState<File | false>(false);
  const [data, setData] = useState<any>({
    title: "",
    description: "",
    category: "Startups",
    author: "Abdullah Khan",
    authorImage: "https://i.pravatar.cc/150?img=3",
  });
  const onChangeHandler = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImage", data.authorImage);
    if (image) {
      formData.append("image", image);
    }
    const response = await axios.post("/api/blog", formData);
    if (response.data.success) {
      toast.success("Blog created successfully");
      setImage(false);
      setData({
        title: "",
        description: "",
        category: "Startups",
        author: "Abdullah Khan",
        authorImage: "https://i.pravatar.cc/150?img=3",
      });
    } else {
      toast.error("Error creating blog");
    }
  };
  return (
    <>
      <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <input
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          type="text"
          className="bg-inherit w-full  mt-4 py-3 px-4 outline-none border-none placeholder:text-4xl text-4xl"
          required
          placeholder="Blog title"
        />
        <textarea
          name="description"
          onChange={onChangeHandler}
          value={data.description}
          className="bg-inherit w-full mt-4 py-3 px-4 outline-none border-none placeholder:text-xl text-xl"
          required
          placeholder="Description (HTML tags supported)"
          rows={20}
        />
        <p className="text-xl mt-4 text-gray-400 px-4">Category</p>
        <select
          onChange={onChangeHandler}
          value={data.category}
          name="category"
          className="w-40 mt-4 px-4 py-3 border text-gray-500"
        >
          <option value="Startups">Startups</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <p className="text-xl text-gray-400 mt-8 ">Upload thumbnail</p>
        <label
          htmlFor="image"
          className="mt-4 flex items-center h-24 w-44 justify-center border border-black cursor-pointer"
        >
          {!image ? (
            <div>
              <AiOutlineUpload />
            </div>
          ) : (
            <Image
              src={URL.createObjectURL(image)}
              width={100}
              height={100}
              alt=""
            />
          )}
        </label>
        <input
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              setImage(e.target.files[0]);
            }
          }}
          type="file"
          id="image"
          hidden
          required
        />
        <br />
        <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">
          Publish
        </button>
      </form>
    </>
  );
};
export default Page;
