import { Cormorant_Garamond } from "next/font/google";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineEmail, MdOutlinePostAdd } from "react-icons/md";
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const Sidebar = () => {
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
          <Link href="/admin/addProduct">
            <div className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
              <IoMdAdd />
              <p>Add Blogs</p>
            </div>
          </Link>
          <Link href="/admin/blogList">
            <div className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
              <MdOutlinePostAdd />
              <p>Blog List</p>
            </div>
          </Link>
          <Link href="subscriptions">
            <div className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
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
