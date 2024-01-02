import { useContext } from "react";
import { StudentContext } from "../Context/StudentContext";

export const useStudentContext = () => {
  const context = useContext(StudentContext);

  if (!context) {
    throw Error(
      "useWorkoutContext must be used inside an workoutsContextProvide"
    );
  }

  return context;
};
