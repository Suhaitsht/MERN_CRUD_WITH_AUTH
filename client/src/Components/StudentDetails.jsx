export default function StudentDetails() {
  return (
    <div className="grid place-content-center">
      <div className="text-center py-7">
        <h3 className="text-xl  uppercase text-emerald-900 font-extrabold">
          Student Details
        </h3>
      </div>
      <table className="w-[1200px] bg-slate-100">
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center ">
          <tr>
            <td>suhait</td>
            <td>suhait</td>
            <td>suhait</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
