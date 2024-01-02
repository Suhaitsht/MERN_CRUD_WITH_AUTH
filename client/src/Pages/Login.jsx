import { useState } from "react";
// import toast, { Toaster } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
import UseLogin from "../Hooks/UseLogin";

export default function Login() {
  const [formData, setFormData] = useState({});
  const { login } = UseLogin();

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await login(formData);
  };
  return (
    <div className="max-w-[600px] h-[550px]  my-9 mx-auto ">
      <form onSubmit={handleFormSubmit}>
        <h3 className="text-3xl uppercase font-serif text-center">login</h3>
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
            placeholder="Password"
            id="password"
            onChange={handleFormData}
          ></input>
          <button className="bg-slate-800 h-10 rounded-md text-white text-md">
            {" "}
            Login
          </button>
          {/* <Toaster /> */}
        </div>
      </form>
    </div>
  );
}
