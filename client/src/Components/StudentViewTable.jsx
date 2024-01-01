import TableBody from "./TableBody";

export default function StudentDetails({ StudentData }) {
  return (
    <div className="grid place-content-center">
      <div className="text-center py-7">
        <h3 className="text-xl  uppercase text-emerald-900 font-extrabold">
          Student Details
        </h3>
      </div>
      <table className="w-[1200px] text-sm text-center rtl:text-right text-white">
        <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 ">
          <tr>
            <th className="border border-slate-600 px-2 py-4 ">FirstName</th>
            <th className="border border-slate-600 px-2 py-4 ">LastName</th>
            <th className="border border-slate-600 px-2 py-4 ">Address</th>
            <th className="border border-slate-600 px-2 py-4 ">Action</th>
          </tr>
        </thead>
        <tbody className="text-center ">
          {StudentData &&
            StudentData.map((data) => (
              <tr
                key={data._id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <TableBody data={data} />
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
