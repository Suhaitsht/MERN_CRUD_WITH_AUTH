import StudentDetails from "../Components/StudentViewTable";
import StudentRegister from "../Components/StudentRegister";
import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";

export default function Home() {
  const [StudentData, setSudentData] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch("http://localhost:4000/api/student", {
        method: "GET",
      });

      const res = await response.json();

      if (!response.ok) {
        toast.error(res);
      }
      setSudentData(res);
    };

    fetchdata();
  }, []);

  return (
    <div>
      <StudentRegister />

      <StudentDetails StudentData={StudentData} />
      <Toaster />
    </div>
  );
}
