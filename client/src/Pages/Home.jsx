import StudentDetails from "../Components/StudentViewTable";
import StudentRegister from "../Components/StudentRegister";
import { useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useStudentContext } from "../Hooks/useStudentContext";

export default function Home() {
  const { dispatch } = useStudentContext();

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch("http://localhost:4000/api/student", {
        method: "GET",
      });

      const res = await response.json();

      if (!response.ok) {
        toast.error(res);
      }

      dispatch({ type: "Display_Student", payload: res });
    };

    fetchdata();
  }, []);

  return (
    <div>
      <StudentRegister />

      <StudentDetails />
      <Toaster />
    </div>
  );
}
