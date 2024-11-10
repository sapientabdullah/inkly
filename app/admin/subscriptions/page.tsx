"use client";

import Subscriptions from "@/components/admin/Subscriptions";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  interface Email {
    _id: string;
    email: string;
    date: string;
  }
  
  const [emails, setEmails] = useState<Email[]>([]);

  const fetchEmails = async () => {
    const response = await axios.get("/api/email");
    setEmails(response.data.emails);
  };

  const deleteEmail = async (mongoId: string) => {
    const response = await axios.delete("/api/email", {
      params: {
        id: mongoId,
      },
    });
    if (response.data.success) {
      toast.success(response.data.msg);
      fetchEmails();
    } else {
      toast.error("Error deleting email");
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);
  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1>All Subscriptions</h1>
      <div className="relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500 ">
          <thead className="text-xs text-left text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="px-6 py-3" scope="col">
                Email Subscription
              </th>
              <th className="hidden sm:block px-6 py-3" scope="col">
                Date
              </th>
              <th className="px-6 py-3" scope="col">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {emails.map((item, index) => {
              return (
                <Subscriptions
                  deleteEmail={deleteEmail}
                  key={index}
                  mongoId={item._id}
                  email={item.email}
                  date={item.date}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Page;
