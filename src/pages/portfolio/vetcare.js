import React from "react";
import "./project-details.css"; // Use the same CSS for styling

const VetCare = () => {
  return (
    <div className="project-detail">
      <h1>Project Summary: VetCare – Online Veterinary Clinic Management System</h1>
      <p>
        Developed a comprehensive web application for veterinary clinic management, providing a seamless platform for pet owners to manage their pets' healthcare needs. The application was built using modern software engineering principles, tools, and technologies, emphasizing collaborative development in a Scrum Agile environment.
      </p>
      <h2>Key Components of the Project:</h2>
      <ul>
        <li>
          <strong>Appointment Scheduling:</strong> Enabled users to book, reschedule, or cancel veterinary appointments with ease.
        </li>
        <li>
          <strong>Medical Records Access:</strong> Provided secure access to pets' medical histories, vaccination records, and treatment plans, with options for download and sharing.
        </li>
        <li>
          <strong>Prescription Management:</strong> Allowed users to request prescription refills and view medication details, including dosage instructions.
        </li>
        <li>
          <strong>Educational Resources:</strong> Integrated a library of articles, videos, and guides on pet care and wellness to promote informed decision-making.
        </li>
        <li>
          <strong>User-Friendly Interface:</strong> Designed an intuitive and responsive interface for an optimal user experience across devices.
        </li>
      </ul>
      <h2>Technologies and Tools Used:</h2>
      <ul>
        <li>Frontend Framework: Spring Boot MVC</li>
        <li>Backend: Java with MySQL database integration</li>
        <li>Build Tool: Maven</li>
        <li>Version Control and CI/CD: GitHub with GitHub Actions</li>
        <li>Testing Framework: JUnit5</li>
        <li>Deployment: Dockerized containers with Docker Compose</li>
      </ul>
      <h2>Development Process:</h2>
      <ul>
        <li>Followed Scrum methodology with incremental sprints and daily standups to ensure consistent progress.</li>
        <li>
          Utilised GitHub Projects for task management and collaboration, ensuring regular and meaningful contributions from all team members.
        </li>
      </ul>
      <a href="/portfolio" className="back-link">
        Back to Portfolio
      </a>
    </div>
  );
};

export default VetCare;
