import React from "react";
import "./project-details.css"; // Import shared CSS

const ClosingTheGap = () => {
  return (
    <div className="project-detail">
      <h1>Project Summary: Closing the Gap – Social Challenge Web Application</h1>
      <p>
        Developed a web-based application addressing the "Closing the Gap" social challenge. This application delivers user-friendly design and robust backend functionality for impactful and engaging user experiences.
      </p>
      <h2>Key Contributions</h2>
      <ul>
        <li>
          <strong>Backend Development:</strong> Enhanced ER Model, implemented SQLite database, and integrated with Java using JDBC for seamless data transactions.
        </li>
        <li>
          <strong>Front-End Development:</strong> Built intuitive interfaces using HTML/CSS and ensured accessibility with responsive navigation systems.
        </li>
        <li>
          <strong>Usability Testing:</strong> Conducted extensive testing and refined UI elements to align with user feedback.
        </li>
        <li>
          <strong>Additional Features:</strong> Populated pages with realistic dummy data and implemented interactive forms for enhanced engagement.
        </li>
        <li>
          <strong>Collaboration:</strong> Utilized GitHub for version control and bi-weekly meetings for seamless teamwork.
        </li>
      </ul>
      <h2>Technical Stack</h2>
      <ul>
        <li>Frontend: HTML, CSS, JavaScript</li>
        <li>Backend: Java, SQLite with JDBC</li>
        <li>Tools: GitHub, MS Teams</li>
      </ul>
      <a href="/portfolio" className="back-link">
        Back to Portfolio
      </a>
    </div>
  );
};

export default ClosingTheGap;
