import { useAuthContext } from "./useAuthContext";

export default function UseLogin() {
  const { dispatch } = useAuthContext();

  const login = async (formData) => {
    const response = await fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    const res = await response.json();

    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(res));
      dispatch({ type: "LOGIN", payload: res });
    }
  };

  return { login };
}
