import { useEffect, useState } from "react";

function Header() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  const logout=()=>{
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/";
  }
  const login=()=>{
    window.location.href = "/login";
  }

  return (
    <div className="h-[10vh] p-5 bg-secondary flex justify-between mb-5">
      <div>
        <button className="text-white text-xl font-semibold mr-5"onClick={() => { window.location.href = "/";}}>
          Home
        </button>
        <button className="text-white text-xl font-semibold mr-5"onClick={() => { window.location.href = "/admin";}}>
          Dashboard
        </button>
      </div>

      {isLoggedIn && (
        <button className="text-white text-xl font-semibold mr-5" onClick={logout}>
          Logout
        </button>
      )}

      {!isLoggedIn && (
        <button className="text-white text-xl font-semibold mr-5" onClick={login}>
          Login
        </button>
      )}
    </div>
  );
}

export default Header;
