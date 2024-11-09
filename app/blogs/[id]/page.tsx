"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import { Cormorant_Garamond } from "next/font/google";
import Link from "next/link";
import axios from "axios";
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

interface PageProps {
  params: {
    id: number;
  };
}

interface BlogData {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  authorImage: string;
}

const Page = ({ params }: PageProps) => {
  const [data, setData] = useState<BlogData | null>(null);
  const fetchData = async () => {
    try {
      const response = await axios.get("/api/blog/", {
        params: { id: params.id },
      });
      setData(response.data.blog);
      console.log(response.data.blog);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return data ? (
    <>
      <div className="bg-[#e1eff6] py-5 px-5 md:px-12 lg:px-28">
        <nav id="navbar">
          <div className="flex items-center justify-between gap-14">
            <div>
              <Link href="/">
                <p
                  className={`${cormorantGaramond.className} text-3xl font-bold hover:underline text-[#012a4a]`}
                >
                  Inkly
                </p>
              </Link>
            </div>
            <Link
              href="/admin"
              className="bg-[#012a4a] text-white px-4 py-2 ml-auto"
            >
              Create
            </Link>
          </div>
        </nav>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            src={data.authorImage} //wip
            width={60}
            height={60}
            alt=""
            className="mx-auto mt-6 border border-white rounded-full"
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.title}
          </p>{" "}
          {/* wip */}
        </div>
      </div>
      <div className="max-w-[800px] mx-5 md:mx-auto mt-[-100px] mb-10 ">
        <Image
          className="border-4 border-[#f9f9f9]"
          src={data.image}
          width={1280}
          height={720}
          alt=""
        />
        <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
        <p>{data.description}</p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step 1: Self-Reflection and goal setting
        </h3>
        <p className="my-3 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At corrupti
          fuga impedit velit totam soluta deleniti maiores non possimus sit
          accusamus amet doloremque, ducimus aut, ab dolorem nisi consequatur
          illum.
        </p>
        <p className="my-3 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At corrupti
          fuga impedit velit totam soluta deleniti maiores non possimus sit
          accusamus amet doloremque, ducimus aut, ab dolorem nisi consequatur
          illum.
        </p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step 2: Self-Reflection and goal setting
        </h3>
        <p className="my-3 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At corrupti
          fuga impedit velit totam soluta deleniti maiores non possimus sit
          accusamus amet doloremque, ducimus aut, ab dolorem nisi consequatur
          illum.
        </p>
        <p className="my-3 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At corrupti
          fuga impedit velit totam soluta deleniti maiores non possimus sit
          accusamus amet doloremque, ducimus aut, ab dolorem nisi consequatur
          illum.
        </p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step 3: Self-Reflection and goal setting
        </h3>
        <p className="my-3 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At corrupti
          fuga impedit velit totam soluta deleniti maiores non possimus sit
          accusamus amet doloremque, ducimus aut, ab dolorem nisi consequatur
          illum.
        </p>
        <p className="my-3 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At corrupti
          fuga impedit velit totam soluta deleniti maiores non possimus sit
          accusamus amet doloremque, ducimus aut, ab dolorem nisi consequatur
          illum.
        </p>
      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
};
export default Page;
