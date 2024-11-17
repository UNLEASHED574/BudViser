import React from "react";

const Home = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <header style={{ marginBottom: "30px" }}>
        <h1>Welcome to Budvisor!</h1>
        <p>Your academic buddy for navigating courses and progress.</p>
      </header>

      <section style={{ marginBottom: "30px" }}>
        <h2>Your DARS Report</h2>
        <p>
          Easily access your Degree Audit Reporting System (DARS) to check your
          academic progress and graduation requirements.
        </p>
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px",
            background: "#f9f9f9",
          }}
        >
          <p>
            <strong>Major:</strong> [Your Major]
          </p>
          <p>
            <strong>Credits Completed:</strong> [Number of Credits]
          </p>
          <p>
            <strong>Credits Remaining:</strong> [Number of Credits]
          </p>
          <p>
            <strong>Required Classes:</strong> [List Key Classes Still Required]
          </p>
        </div>
        <button
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Upload DARS Report
        </button>
      </section>

      <section>
        <h2>Discover Your Next Classes</h2>
        <p>Looking for interesting courses? Check out these options:</p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              background: "#f9f9f9",
            }}
          >
            <h3>Creative Pursuits</h3>
            <ul>
              <li>Graphic Design for Beginners</li>
              <li>Introduction to Creative Writing</li>
              <li>Photography and Digital Arts</li>
            </ul>
          </div>
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              background: "#f9f9f9",
            }}
          >
            <h3>Tech Enthusiast Picks</h3>
            <ul>
              <li>Intro to AI and Machine Learning</li>
              <li>Full-Stack Web Development</li>
              <li>Game Design and Development</li>
            </ul>
          </div>
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              background: "#f9f9f9",
            }}
          >
            <h3>Wellness & Self-Development</h3>
            <ul>
              <li>Yoga and Mindfulness Practices</li>
              <li>Nutrition and Health</li>
              <li>Public Speaking and Presentation Skills</li>
            </ul>
          </div>
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              background: "#f9f9f9",
            }}
          >
            <h3>Diving Deep into Your Major</h3>
            <ul>
              <li>Advanced Topics in [Your Major]</li>
              <li>Hands-on Workshops or Labs</li>
              <li>Capstone Projects or Research Opportunities</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
