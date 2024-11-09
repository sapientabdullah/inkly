import Image from "next/image";
import { MdDelete } from "react-icons/md";

interface TableItemProps {
  authorImage: string;
  title: string;
  author: string;
  date: string;
  deleteBlog: (id: string) => void;
  mongoId: string;
}

const TableItem = ({
  authorImage,
  title,
  author,
  date,
  deleteBlog,
  mongoId,
}: TableItemProps) => {
  const entryDate = new Date(date).toDateString();
  return (
    <tr className="bg-[#f9f9f9] border-b">
      <th
        scope="row"
        className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap
      "
      >
        <Image
          src={
            authorImage
              ? authorImage
              : "https://iconduck.com/icons/180867/profile-circle"
          }
          width={40}
          height={40}
          alt="author"
        />
        <p>{author ? author : ""}</p>
      </th>
      <td className="px-6 py-4">{title ? title : ""}</td>
      <td className="px-6 py-4">{entryDate}</td>
      <td className="px-6 py-4">
        <MdDelete
          className="cursor-pointer hover:text-red-500 active:text-red-500"
          onClick={() => deleteBlog(mongoId)}
        />
      </td>
    </tr>
  );
};
export default TableItem;
