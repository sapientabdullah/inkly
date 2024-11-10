import Sidebar from "@/components/admin/Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex">
        <ToastContainer theme="light" />
        <Sidebar />
        <div className="w-full lg:ps-40">
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">{children}</div>
        </div>
      </div>
    </>
  );
}
