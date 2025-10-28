export default function LandingPage({ onNavigate }) {
  return (
    <div className="container">
      <h1>Welcome to the Ticket App</h1>
      <button onClick={() => onNavigate("login")}>Go to Login</button>
    </div>
  );
}
