import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

export default function StudentEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(`http://localhost:4000/api/student/${id}`, {
        method: "GET",
      });

      const res = await response.json();
      setAddress(res.address);
      setFirstname(res.firstname);
      setLastname(res.lastname);
    };
    fetchdata();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstname || !lastname || !address) {
      toast.error("All fields are required");
      return false;
    }

    const response = await fetch(`http://localhost:4000/api/student/${id}`, {
      method: "PUT",
      body: JSON.stringify({ firstname, lastname, address }),
      headers: { "Content-Type": "application/json" },
    });
    const res = await response.json();

    if (!response.ok) {
      toast.error(res.error);
    } else {
      toast.success(res.messages);
      setTimeout(() => {
        setRedirect(true);
      }, 2000);
    }
  };

  if (redirect) {
    return navigate(-1);
  }

  return (
    <div className="max-w-[600px] h-[550px]  my-9 mx-auto ">
      <form onSubmit={handleSubmit}>
        <h3 className="text-3xl uppercase font-serif text-center">
          Update Registration
        </h3>
        <div className="grid  mt-10 gap-4">
          <label className="text-md font-semibold"> Full Name</label>
          <input
            type="text"
            className=" h-10 w-full px-3 ring-2 ring-red-200 rounded-md"
            placeholder="First Name"
            id="firstname"
            value={firstname}
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
          ></input>
          <label className="text-md font-semibold"> Last Name</label>
          <input
            type="text"
            className=" h-10 w-full px-3 ring-2 ring-red-200 rounded-md"
            placeholder="Last Name"
            id="lastname"
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value);
            }}
          ></input>
          <label className="text-md font-semibold">Address</label>
          <input
            type="text"
            className=" h-10 w-full px-3 ring-2 ring-red-200 rounded-md"
            placeholder=" Address"
            id="address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          ></input>
          <button className="bg-slate-800 h-10 rounded-md text-white text-md hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out ">
            {" "}
            Update
          </button>
          <Toaster />
        </div>
      </form>
    </div>
  );
}
