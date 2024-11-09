"use client";
import { Cormorant_Garamond } from "next/font/google";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineEmail, MdOutlinePostAdd } from "react-icons/md";
import { usePathname } from "next/navigation";
import clsx from "clsx";
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col bg-slate-100">
      <div className="px-2 sm:pl-14 py-3 border border-black">
        <Link href="/">
          <p
            className={`${cormorantGaramond.className} text-3xl font-bold hover:underline text-[#012a4a]`}
          >
            Inkly
          </p>
        </Link>
      </div>
      <div className="w-28 sm:w-80 h-[100vh] relative py-12 border border-black">
        <div className="w-[50%] sm:w-[80%] absolute right-0 ">
          <Link href="/admin/addPost">
            <div
              className={clsx(
                "flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white",
                pathname === "/admin/addPost" && "bg-blue-900 text-[#012a4a]"
              )}
            >
              <IoMdAdd />
              <p>Add Post</p>
            </div>
          </Link>
          <Link href="/admin/blogList">
            <div
              className={clsx(
                "mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white",
                pathname === "/admin/blogList" && "bg-blue-900 text-[#012a4a]"
              )}
            >
              <MdOutlinePostAdd />
              <p>PostList</p>
            </div>
          </Link>
          <Link href="subscriptions">
            <div
              className={clsx(
                "mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white",
                pathname === "/admin/subscriptions" &&
                  "bg-blue-900 text-[#012a4a]"
              )}
            >
              <MdOutlineEmail />
              <p>Subscriptions</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
