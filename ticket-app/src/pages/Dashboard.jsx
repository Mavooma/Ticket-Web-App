import { useState } from "react";

function Dashboard({ onNavigate }) {
  const [tickets, setTickets] = useState([]);
  const [newTicket, setNewTicket] = useState("");

  const addTicket = () => {
    if (newTicket.trim() === "") return;
    setTickets([
      ...tickets,
      { id: Date.now(), title: newTicket, status: "Open" },
    ]);
    setNewTicket("");
  };

  const updateStatus = (id) => {
    setTickets(
      tickets.map((ticket) =>
        ticket.id === id
          ? {
              ...ticket,
              status:
                ticket.status === "Open"
                  ? "In Progress"
                  : ticket.status === "In Progress"
                  ? "Closed"
                  : "Closed",
            }
          : ticket
      )
    );
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Dashboard</h2>

      {/* Add Ticket */}
      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Enter ticket title"
          value={newTicket}
          onChange={(e) => setNewTicket(e.target.value)}
          style={{ padding: "10px", width: "250px" }}
        />
        <button onClick={addTicket} style={{ marginLeft: "10px", padding: "10px" }}>
          Add Ticket
        </button>
      </div>

      {/* Ticket List */}
      <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
        {tickets.map((ticket) => (
          <li
            key={ticket.id}
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              marginBottom: "10px",
            }}
          >
            <strong>{ticket.title}</strong> - {ticket.status}
            <button
              onClick={() => updateStatus(ticket.id)}
              style={{ marginLeft: "10px", padding: "5px 10px" }}
            >
              Next Status
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => onNavigate("login")}
        style={{ padding: "10px 20px", marginTop: "20px" }}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
