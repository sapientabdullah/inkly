import { Cormorant_Garamond } from "next/font/google";
import Link from "next/link";
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const Footer = () => {
  return (
    <footer className="p-4 absolute flex w-full flex-col gap-2 sm:gap-0 sm:flex-row bg-[#012a4a] py-10 items-center">
      <div>
        <Link href="/">
          <p
            className={`${cormorantGaramond.className} text-3xl font-bold hover:underline text-white mt-8`}
          >
            Inkly
          </p>
        </Link>
      </div>
      <div className="absolute bg-[#f9f9f9] w-12 h-12 top-0 right-0"></div>
      <div className="absolute bg-[#f9f9f9] w-12 h-12 top-0 right-24"></div>
      <div className="absolute bg-[#f9f9f9] w-12 h-12 top-12 right-12"></div>
      <div className="absolute bg-[#f9f9f9] w-12 h-12 top-24 right-0"></div>
    </footer>
  );
};
export default Footer;
