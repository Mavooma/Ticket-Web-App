import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import TicketManager from "./pages/TicketManager";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [page, setPage] = useState("landing");

  return (
    <>
      <Navbar onNavigate={setPage} />
      {page === "landing" && <LandingPage onNavigate={setPage} />}
      {page === "login" && <LoginPage onNavigate={setPage} />}
      {page === "dashboard" && <Dashboard onNavigate={setPage} />}
      {page === "tickets" && <TicketManager onNavigate={setPage} />}
    </>
  );
}

export default App;
