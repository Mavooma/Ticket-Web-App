export default function Navbar({ onNavigate }) {
  return (
    <nav className="nav">
      <h3>Ticket App</h3>
      <div className="nav-buttons">
        <button onClick={() => onNavigate("landing")}>Home</button>
        <button onClick={() => onNavigate("dashboard")}>Dashboard</button>
        <button onClick={() => onNavigate("tickets")}>Tickets</button>
        <button onClick={() => onNavigate("login")}>Login</button>
      </div>
    </nav>
  );
}
