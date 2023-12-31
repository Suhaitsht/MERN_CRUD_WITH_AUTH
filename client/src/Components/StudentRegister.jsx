export default function StudentRegister() {
  return (
    <>
      <div className="max-w-[600px] h-[550px]  my-9 mx-auto ">
        <form>
          <h3 className="text-3xl uppercase font-serif text-center">
            Student Registration
          </h3>
          <div className="grid  mt-10 gap-4">
            <label className="text-md font-semibold"> Full Name</label>
            <input
              type="text"
              className=" h-10 w-full px-3 ring-2 ring-red-200 rounded-md"
              placeholder="First Name"
            ></input>
            <label className="text-md font-semibold"> Last Name</label>
            <input
              type="text"
              className=" h-10 w-full px-3 ring-2 ring-red-200 rounded-md"
              placeholder="Last Name"
            ></input>
            <label className="text-md font-semibold">Address</label>
            <input
              type="text"
              className=" h-10 w-full px-3 ring-2 ring-red-200 rounded-md"
              placeholder=" Address"
            ></input>
            <button className="bg-slate-800 h-10 rounded-md text-white text-md">
              {" "}
              Create
            </button>
          </div>
        </form>
      </div>

      <div></div>
    </>
  );
}
