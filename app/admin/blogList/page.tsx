const Page = () => {
  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1>All Blogs</h1>
      <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-sm text-gray-700 text-left uppercase bg-gray-50">
            <tr>
              <th scope="column" className="hidden sm:block px-6 py-3">
                Author name
              </th>
              <th scope="column" className="px-6 py-3">
                Title
              </th>
              <th scope="column" className="px-6 py-3">
                Date
              </th>
              <th scope="column" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};
export default Page;
