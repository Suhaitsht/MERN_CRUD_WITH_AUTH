import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    const res = await response.json();

    if (response.ok) {
      toast.success(res.messages);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else {
      toast.error(res.err);
    }
  };

  return (
    <div className="max-w-[600px] h-[550px]  my-9 mx-auto ">
      <form onSubmit={handleFormSubmit}>
        <h3 className="text-3xl uppercase font-serif text-center">SigUp</h3>
        <div className="grid  mt-10 gap-4">
          <label className="text-md font-semibold"> UserName</label>
          <input
            type="text"
            className=" h-10 w-full px-3 ring-2 ring-red-200 rounded-md"
            placeholder="Enter Name"
            id="username"
            onChange={handleFormData}
          ></input>
          <label className="text-md font-semibold">Password</label>
          <input
            type="password"
            className=" h-10 w-full px-3 ring-2 ring-red-200 rounded-md"
            placeholder="Enter Name"
            id="password"
            onChange={handleFormData}
          ></input>
          <button className="bg-slate-800 h-10 rounded-md text-white text-md">
            {" "}
            Register
          </button>
          <Toaster />
        </div>
      </form>
    </div>
  );
}
