import { MdDelete } from "react-icons/md";

interface SubscriptionsProps {
  email?: string;
  mongoId: string;
  date: string;
  deleteEmail: (mongoId: string) => void;
}

const Subscriptions = ({
  email,
  mongoId,
  deleteEmail,
  date,
}: SubscriptionsProps) => {
  const emailDate = new Date(date).toDateString();
  return (
    <tr className="bg-white border-bottom text-left">
      <th
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
        scope="col"
      >
        {email ? email : "No email"}
      </th>
      <td className="px-6 py-4 hidden sm:block">{emailDate}</td>
      <td className="px-6 py-4">
        <MdDelete
          className="cursor-pointer hover:text-red-500 active:text-red-500"
          onClick={() => deleteEmail(mongoId)}
        />
      </td>
    </tr>
  );
};
export default Subscriptions;
