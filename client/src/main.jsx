import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StudentContextProvider } from "./Context/StudentContext.jsx";
import { AuthContextProvider } from "./Context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <StudentContextProvider>
        <App />
      </StudentContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
