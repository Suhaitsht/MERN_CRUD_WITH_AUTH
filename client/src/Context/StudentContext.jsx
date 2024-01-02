import { createContext, useReducer } from "react";

export const StudentContext = createContext();

export const studentReducer = (state, action) => {
  switch (action.type) {
    case "Display_Student":
      return {
        Students: action.payload,
      };

    case "Create_Student":
      return {
        Students: [action.payload, ...state.Students],
      };

    case "Delete_Student":
      return {
        Students: state.Students.filter((st) => st._id !== action.payload._id),
      };

    default:
      return state;
  }
};

export const StudentContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(studentReducer, {
    Students: null,
  });

  return (
    <StudentContext.Provider value={{ ...state, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
};
