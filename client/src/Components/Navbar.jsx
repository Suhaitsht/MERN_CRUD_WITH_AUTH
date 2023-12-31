export default function Navbar() {
  return (
    <div className="w-full h-28 bg-slate-100 ">
      <nav className="container w-full mx-auto flex justify-between items-center ">
        <div className="my-10 text-3xl uppercase text-black font-semibold">
          <h1>Student Register</h1>
        </div>
        <div className="flex justify-center items-center gap-6 text-1xl font-semibold text-red-500">
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
        </div>
      </nav>
    </div>
  );
}
