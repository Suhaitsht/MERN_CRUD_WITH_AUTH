import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function StudentRegister() {
  const [formData, setFormData] = useState({});

  const handleData = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/api/student/", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    const res = await response.json();

    if (response.ok) {
      toast.success(res.messages);
    } else {
      toast.error(res.messages);
    }
  };

  return (
    <>
      <div className="max-w-[600px] h-[550px]  my-9 mx-auto ">
        <form onSubmit={handelSubmit}>
          <h3 className="text-3xl uppercase font-serif text-center">
            Student Registration
          </h3>
          <div className="grid  mt-10 gap-4">
            <label className="text-md font-semibold"> Full Name</label>
            <input
              type="text"
              className=" h-10 w-full px-3 ring-2 ring-red-200 rounded-md"
              placeholder="First Name"
              id="firstname"
              onChange={handleData}
            ></input>
            <label className="text-md font-semibold"> Last Name</label>
            <input
              type="text"
              className=" h-10 w-full px-3 ring-2 ring-red-200 rounded-md"
              placeholder="Last Name"
              id="lastname"
              onChange={handleData}
            ></input>
            <label className="text-md font-semibold">Address</label>
            <input
              type="text"
              className=" h-10 w-full px-3 ring-2 ring-red-200 rounded-md"
              placeholder=" Address"
              id="address"
              onChange={handleData}
            ></input>
            <button className="bg-slate-800 h-10 rounded-md text-white text-md hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out ">
              {" "}
              Create
            </button>
            <Toaster />
          </div>
        </form>
      </div>

      <div></div>
    </>
  );
}
