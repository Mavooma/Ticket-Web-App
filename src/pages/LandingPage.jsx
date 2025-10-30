import "./LandingPage.css";
import circles from "/src/assets/circle-scatter-haikei.svg";
export default function LandingPage({ onNavigate }) {
  return (
    <div className="landing-container">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Background Images */}
        {/* <img
          src="../assets/layered-waves-haikei.svg"
          alt="wavy background"
          className="bg-wave"
        /> */}
        <img
          src={require(circles)}
          alt="bubble background"
          // className="bg-bubble"
        />

        {/* Hero Content */}
        <div className="hero-content">
          <h1 className="app-title">Welcome to the Ticket App</h1>
          <p className="app-description">
            Seamlessly book, manage, and track your tickets — all in one place.
          </p>
          <div className="hero-buttons">
            <button className="btn primary" onClick={() => onNavigate("login")}>
              Login
            </button>
            <button className="btn secondary" onClick={() => onNavigate("signup")}>
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-box">
          <h3>Fast Booking</h3>
          <p>Book your tickets in seconds with our intuitive interface.</p>
        </div>
        <div className="feature-box">
          <h3>Secure Payments</h3>
          <p>All transactions are encrypted for your peace of mind.</p>
        </div>
        <div className="feature-box">
          <h3>24/7 Support</h3>
          <p>Our friendly support team is always ready to assist you.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Ticket App. All rights reserved.</p>
      </footer>
    </div>
  );
}
