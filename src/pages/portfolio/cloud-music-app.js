import React from "react";
import "./project-details.css"; // Import the CSS

const CloudMusicApp = () => {
  return (
    <div className="project-detail">
      <h1>Project Summary: Cloud-Based Music Subscription Application</h1>
      <p>
        Developed a scalable cloud-based music subscription application leveraging core AWS
        services including EC2, S3, API Gateway, Lambda, and DynamoDB. The application
        provides an intuitive user experience for music discovery, subscription management,
        and dynamic queries, fully hosted on an EC2 instance running an Ubuntu server.
      </p>
      <h2>Key Features:</h2>
      <ul>
        <li>
          <strong>Login and Registration System:</strong> Secure login and registration with DynamoDB-backed credential validation and email uniqueness checks.
        </li>
        <li>
          <strong>Main Page Functionality:</strong>
          <ul>
            <li>Displays user-specific details and subscriptions.</li>
            <li>Enables dynamic queries for music by title, artist, or year.</li>
            <li>Allows users to subscribe to or remove music subscriptions dynamically.</li>
          </ul>
        </li>
        <li>
          <strong>Cloud Integration:</strong>
          <ul>
            <li>Stores user, music, and subscription data in DynamoDB.</li>
            <li>Hosts artist images on S3, dynamically fetched and updated.</li>
            <li>Facilitates data operations via API Gateway and Lambda functions.</li>
          </ul>
        </li>
      </ul>
      <h2>Technologies and Tools Used:</h2>
      <ul>
        <li>Frontend: HTML, CSS, JavaScript</li>
        <li>Backend: Python-based APIs and Lambda functions</li>
        <li>AWS Services: EC2, S3, DynamoDB, API Gateway, Lambda</li>
        <li>Web Server: Apache2 on Ubuntu EC2 instance</li>
      </ul>
      <h2>Outcomes:</h2>
      <p>
        Delivered a fully functional cloud application, showcasing secure login/registration,
        dynamic music subscription management, and real-time query handling. The project
        emphasizes scalable cloud architecture, automation, and user-centric design.
      </p>
      <a href="/portfolio" className="back-link">
        Back to Portfolio
      </a>
    </div>
  );
};

export default CloudMusicApp;
