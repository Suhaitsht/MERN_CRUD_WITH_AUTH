export default function Login() {
  return (
    <div className="max-w-[600px] h-[550px]  my-9 mx-auto ">
      <form>
        <h3 className="text-3xl uppercase font-serif text-center">login</h3>
        <div className="grid  mt-10 gap-4">
          <label className="text-md font-semibold"> Email</label>
          <input
            type="text"
            className=" h-10 w-full px-3 ring-2 ring-red-200 rounded-md"
            placeholder="Enter Name"
          ></input>
          <label className="text-md font-semibold">Password</label>
          <input
            type="text"
            className=" h-10 w-full px-3 ring-2 ring-red-200 rounded-md"
            placeholder="Password"
          ></input>
          <button className="bg-slate-800 h-10 rounded-md text-white text-md">
            {" "}
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
