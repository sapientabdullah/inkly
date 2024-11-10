import { Cormorant_Garamond } from "next/font/google";
import Link from "next/link";
import { IoMdArrowDown } from "react-icons/io";
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const Navbar = () => {
  return (
    <nav className="p-4" id="navbar">
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
        <div className="flex items-center">
          <Link href="#posts">
            <div className="mt-2 flex items-center hover:underline text-sm text-center text-[#012a4a]">
              Posts <IoMdArrowDown className="ml-1 text-[#012a4a]" />
            </div>
          </Link>
        </div>
        <Link
          href="/admin/addPost"
          className="bg-[#012a4a] text-white px-4 py-2 ml-auto"
        >
          Create
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
