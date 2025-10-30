import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [session, setSession] = useState(
    JSON.parse(localStorage.getItem("ticketapp_session"))
  );

  useEffect(() => {
    // Watch for changes to localStorage
    const handleStorageChange = () => {
      setSession(JSON.parse(localStorage.getItem("ticketapp_session")));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("ticketapp_session");
    setSession(null);
    navigate("/auth/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo" onClick={() => navigate("/")}>
          TicketApp
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>

          {!session && <li><Link to="/auth/login">Login</Link></li>}
          {session && <li><Link to="/dashboard">Dashboard</Link></li>}
          {session && <li><Link to="/tickets">Tickets</Link></li>}
          {session && (
            <li>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
