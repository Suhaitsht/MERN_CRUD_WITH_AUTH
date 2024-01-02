import { useAuthContext } from "./useAuthContext";

export default function UserLogout() {
  const { dispatch } = useAuthContext();
  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };
  return { logout };
}
