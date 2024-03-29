import { Link } from "react-router-dom";
import UserLogout from "../Hooks/UserLogout";
import { useAuthContext } from "../Hooks/useAuthContext";

export default function Navbar() {
  const { logout } = UserLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    logout();
  };
  return (
    <div className="w-full h-28 bg-slate-100 ">
      <nav className="container w-full mx-auto flex justify-between items-center ">
        <div className="my-10 text-3xl uppercase text-black font-semibold">
          <h1>Student Register</h1>
        </div>
        <div className="flex justify-center items-center gap-6 text-1xl font-semibold text-red-500 uppercase">
          {user && (
            <>
              <Link to="/">Home</Link>
              <span>{user.username}</span>
              <button onClick={handleClick}>LogOut</button>
            </>
          )}

          {!user && (
            <>
              <Link to="/sign-up">SignUp</Link>
              <Link to="/login">Login</Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
