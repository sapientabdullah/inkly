"use client";
import Navbar from "@/components/Navbar";
import { Cormorant_Garamond } from "next/font/google";
import List from "@/components/List";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function Home() {
  return (
    <div className="h-full bg-[#f9f9f9]">
      <Navbar />
      <div className="p-4 mt-8">
        <section className="py-4 flex flex-col gap-6 p-4 inset-0 -z-10 bg-[linear-gradient(to_right,#e1eff6_1px,transparent_1px),linear-gradient(to_bottom,#e1eff6_1px,transparent_1px)] bg-[size:1rem_1rem] border-b border-[#e1eff6] border-r">
          <div className="mt-8 rounded-full border-2 border-[#012a4a] text-sm font-bold py-1 px-4 w-fit text-[#012a4a]">
            Essays for Change
          </div>
          <h2
            className={`${cormorantGaramond.className} font-black text-5xl text-[#012a4a]`}
          >
            Stories that Illuminate. Solutions that Inspire.
          </h2>
          <p className="-mt-2 text-[#012a4a] text-xl mb-7">
            Explore Essays and Personal Narratives of Resilience, Challenges,
            and Community-Led Solutions.
          </p>
        </section>
        <Hero />
        <section>
          <div className="text-center my-4">
            <form className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-[#012a4a]">
              <input
                type="email"
                placeholder="Enter your email"
                className="pl-4 outline-none bg-inherit"
              />
              <button
                type="submit"
                className="border-l border-[#012a4a] py-4 px-4 sm:px-8 active:bg-gray-900 active:text-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
        <List />
      </div>
      <Footer />
    </div>
  );
}
