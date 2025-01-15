import React from "react";
import "./project-details.css"; // Import shared CSS
import GroceryAppImage from "../../assets/images/AngularGrocery.png"; // Replace with your actual image path

const GroceryStoreApp = () => {
  return (
    <div className="project-detail">
      <h1>Project Summary: Grocery Store Application</h1>
      <p>
        Developed a modern grocery store application featuring secure authentication, recipe management, and a user-friendly interface.
      </p>
      <h2>Key Contributions</h2>
      <ul>
        <li>
          <strong>Frontend Development:</strong> Built with Angular and TypeScript, designed responsive UI, and implemented seamless navigation using Angular Router.
        </li>
        <li>
          <strong>Secure Authentication:</strong> Integrated Firebase for user login, registration, password reset, and real-time authentication updates.
        </li>
        <li>
          <strong>Recipe Management:</strong> Developed a module for creating, editing, and managing recipes linked to grocery items, with real-time data storage via Firebase Firestore.
        </li>
        <li>
          <strong>Data Optimization:</strong> Utilized Angular services and Firebase to ensure efficient state management, real-time data sync, and fast load times.
        </li>
        <li>
          <strong>Deployment:</strong> Used Git/GitHub for version control and deployed the application with CI/CD pipelines.
        </li>
      </ul>
      <h2>Outcomes</h2>
      <p>
        Delivered a secure, scalable, and user-friendly application, enhancing user engagement through recipe integration and efficient grocery management.
      </p>
      <h2>Technical Stack</h2>
      <ul>
        <li>Frontend: Angular, TypeScript, HTML, CSS</li>
        <li>Authentication and Database: Firebase Authentication, Firebase Firestore</li>
        <li>Tools and Libraries: Angular CLI, RxJS for reactive programming, Git/GitHub for version control</li>
      </ul>
      <div className="project-image">
        <h2>Project Image</h2>
        <img src={GroceryAppImage} alt="Grocery Store Application" />
      </div>
      <a href="/portfolio" className="back-link">
        Back to Portfolio
      </a>
    </div>
  );
};

export default GroceryStoreApp;
