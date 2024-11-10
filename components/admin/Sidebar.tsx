"use client";
import { Cormorant_Garamond } from "next/font/google";
import Link from "next/link";
import { cloneElement, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineEmail, MdOutlinePostAdd } from "react-icons/md";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { IoChevronBackOutline } from "react-icons/io5";
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function Sidebar() {
  const [open, setOpen] = useState<boolean>(true);
  const pathname = usePathname();

  const links = [
    {
      text: "Add Post",
      href: "/admin/addPost",
      icon: <IoMdAdd className="text-[#012a4a]" />,
    },
    {
      text: "Post List",
      href: "/admin/blogList",
      icon: <MdOutlineEmail className="text-[#012a4a]" />,
    },
    {
      text: "Subscriptions",
      href: "/admin/subscriptions",
      icon: <MdOutlinePostAdd className="text-[#012a4a]" />,
    },
  ];

  return (
    <div
      className={`custom-theme hs-overlay  [--auto-close:lg]
    hs-overlay-open:translate-x-0
    -translate-x-full transition-all duration-300 transform
     h-full
    hidden
    fixed inset-y-0 start-0 z-[60]
    bg-card border-e border-[#012a4a]
      lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 ${
        open ? "w-[170px]" : "w-[60px]"
      } `}
      role="dialog"
      tabIndex={-1}
      aria-label="Sidebar"
    >
      <div className="relative flex flex-col h-full max-h-full">
        <Link href="/">
          <p
            className={`${cormorantGaramond.className} mt-6 text-2xl text-center font-bold hover:underline text-[#012a4a]`}
          >
            Inkly
          </p>
        </Link>

        <button
          onClick={() => setOpen((open) => !open)}
          className={`flex items-center justify-between ${
            open ? "-translate-y-5" : "-translate-y-2 translate-x-9"
          } w-48 px-4 py-2`}
        >
          {open && (
            <div className="flex items-center transition-all duration-200">
              <span className="bg-transparent w-[135px] h-[1px]"></span>
            </div>
          )}

          {!open && (
            <div className="absolute -translate-x-10 flex items-center transition-all duration-200">
              <span className="bg-transparent w-8 h-[1px]"></span>
            </div>
          )}

          {open ? (
            <IoChevronBackOutline
              size={17}
              className="bg-[#012a4a] rounded-full transition-all duration-200 text-white"
            />
          ) : (
            <IoChevronBackOutline
              size={17}
              className="bg-[#012a4a] rounded-full rotate-180 transition-all duration-200 text-white"
            />
          )}
        </button>
        <div className="h-full overflow-y-auto">
          <nav className="w-full p-3 transition-all flex flex-col flex-wrap">
            <ul className={`flex flex-col ${open ? "space-y-1" : "space-y-4"}`}>
              {links.map((link) => (
                <li key={link.text} className="group">
                  <Link
                    className={clsx(
                      "relative flex items-center gap-x-3.5 py-2 px-2.5 transition-colors duration-200 text-sm text-foreground rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100",
                      pathname === link.href && "bg-gray-100"
                    )}
                    href={link.href}
                  >
                    {open
                      ? link.icon
                      : cloneElement(link.icon, {
                          className: "size-5 transition-all duration-200",
                        })}
                    {open ? link.text : ""}
                  </Link>
                  {!open && (
                    <div
                      className={`
                        absolute left-full rounded-lg px-2 py-1 ml-2 bg-card text-primary text-sm invisible opacity-20 -translate-x-3 -translate-y-7 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
                    >
                      {link.text}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
