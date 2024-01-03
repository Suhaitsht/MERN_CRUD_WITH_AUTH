import StudentDetails from "../Components/StudentViewTable";
import StudentRegister from "../Components/StudentRegister";
import { useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useStudentContext } from "../Hooks/useStudentContext";
import { useAuthContext } from "../Hooks/useAuthContext";

export default function Home() {
  const { dispatch } = useStudentContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch("http://localhost:4000/api/student", {
        headers: {
          "Authorization": `Bearer ${user.token}`,
        },
      });

      const res = await response.json();

      if (!response.ok) {
        toast.error(res);
      }

      dispatch({ type: "Display_Student", payload: res });
    };

    if (user) {
      fetchdata();
    }
  }, [dispatch, user]);

  return (
    <div>
      <StudentRegister />

      <StudentDetails />
      <Toaster />
    </div>
  );
}
