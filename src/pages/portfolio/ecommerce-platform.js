import React from "react";
import "./project-details.css"; // Import the CSS
import FullStack from "../../assets/images/FullStack.png";


const EcommercePlatform = () => {
  return (
    <div className="project-detail">
      <h1>Project Summary: Full-Stack E-Commerce Platform</h1>
      <p>
        Developed a scalable full-stack e-commerce platform with user authentication, product management,
        and transaction capabilities using modern web technologies.
      </p>
      <h2>Key Features:</h2>
      <ul>
        <li>Secure sign-up, login, and profile management with hashed passwords.</li>
        <li>Dynamic display and management of products using a Cloud MySQL database.</li>
        <li>Full cart functionality integrated with backend APIs for data persistence.</li>
        <li>Review system with star ratings and CRUD operations for reviews.</li>
        <li>Admin dashboard with real-time metrics using GraphQL.</li>
      </ul>
      <h2>Technologies and Tools Used:</h2>
      <ul>
        <li>Frontend: ReactJS</li>
        <li>Backend: Node.js, Express.js</li>
        <li>Database: Cloud MySQL</li>
        <li>Version Control: GitHub</li>
      </ul>
      <div className="project-image">
        <h2>Project Image</h2>
        <img
          src={FullStack}
          alt="Full-Stack E-Commerce Platform"
        />
      </div>
      <a href="/portfolio" className="back-link">
        Back to Portfolio
      </a>
    </div>
  );
};

// You don't export anything from this file.

export default EcommercePlatform;
