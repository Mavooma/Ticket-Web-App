import { useState } from "react";

export default function TicketManagement({ onNavigate }) {
  const [tickets, setTickets] = useState([]);
  const [newTicket, setNewTicket] = useState("");

  const addTicket = () => {
    if (newTicket.trim() === "") return;
    setTickets([...tickets, newTicket]);
    setNewTicket("");
  };

  return (
    <div className="container">
      <h1>Ticket Manager</h1>

      <input
        type="text"
        placeholder="Enter ticket description..."
        value={newTicket}
        onChange={(e) => setNewTicket(e.target.value)}
      />

      <button onClick={addTicket}>Add Ticket</button>

      <ul>
        {tickets.map((ticket, index) => (
          <li key={index}>{ticket}</li>
        ))}
      </ul>

      <button onClick={() => onNavigate("dashboard")}>Back to Dashboard</button>
    </div>
  );
}
