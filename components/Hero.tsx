import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const Hero = () => {
  return (
    <div className="mt-11 relative w-full">
      <Image
        src="https://images.unsplash.com/photo-1641069269826-95f58822c51a?q=80&w=2789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        height={800}
        width={1500}
        alt=""
        className="object-cover"
      />
      <div className="absolute bg-[#f9f9f9] w-12 h-12 top-0 right-0"></div>
      <div className="absolute bg-[#f9f9f9] w-12 h-12 top-0 right-24"></div>
      <div className="absolute bg-[#f9f9f9] w-12 h-12 top-12 right-12"></div>
      <div className="absolute bg-[#f9f9f9] w-12 h-12 top-24 right-0"></div>
      <div className="grid grid-cols-2 ml-4 absolute text-white bottom-8">
        <div className="col-span-2">
          <h2
            className={`${cormorantGaramond.className} text-3xl font-extrabold`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam amet
            possimus accusantium eius, id adipisci!
          </h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            voluptates. Asperiores labore vero repellendus in, iure adipisci
            incidunt. Recusandae, suscipit minima! Eius, enim. Exercitationem
            sequi, odio ab impedit consectetur voluptas!
          </p>
        </div>
        <div className="ml-4 mt-12 col-span-1 col-start-3 flex items-center">
          <div className="p-4 border-l-2 border-white justify-end">
            <h3 className="text-sm font-bold mb-2">Written by</h3>
            <p className="font-bold">Abdullah Khan</p>
          </div>
          <div className="p-4 border-l-2 border-white">
            <h3 className="text-sm font-bold mb-2">Written by</h3>
            <p className="font-bold">Abdullah Khan</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
