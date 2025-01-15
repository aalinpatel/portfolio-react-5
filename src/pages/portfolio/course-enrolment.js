import React from "react";
import "./project-details.css"; // Import the shared CSS file
import CourseEnrolmentImage from "../../assets/images/CourseManagementSystem.png"; // Replace with your image path

const CourseEnrolment = () => {
  return (
    <div className="project-detail">
      <h1>Project Summary: University Course Enrolment System Prototype</h1>
      <p>
        Designed and implemented a Course Enrolment System Prototype for a university, focusing on efficiently managing academic programs, courses, semesters, and student data. The system aimed to streamline enrollment processes while offering user-friendly functionalities for both students and administrators.
      </p>
      <h2>Key Features</h2>
      <h3>Core Functionalities</h3>
      <ul>
        <li>
          <strong>Course Management:</strong> Implemented a Course class to manage course details such as code, title,
          credit points, prerequisites, and semester availability. Enabled addition, removal, and modification of
          prerequisites and semester offerings.
        </li>
        <li>
          <strong>Program Management:</strong> Developed a Program class to manage academic programs, including core and
          elective courses for programs like Bachelor of Computer Science. Allowed modification of program structures to
          reflect updates in course requirements.
        </li>
        <li>
          <strong>Semester and Student Management:</strong> Created a Semester class to manage course offerings, caps
          on student enrollment, and student lists. Built a Student class to handle student details, academic history,
          current enrollments, and study plans.
        </li>
      </ul>
      <h3>Functional Requirements</h3>
      <ul>
        <li>
          <strong>Student Features:</strong> Displayed academic history, current enrollments, and study plans. Allowed
          students to enroll or unenroll in courses, adhering to prerequisites and seat availability. Provided a query
          system for courses and program information.
        </li>
        <li>
          <strong>Admin Features:</strong> Supported adding, removing, and modifying students, courses, programs, and
          semesters. Offered advanced functionalities like study plan validation and generation of minimum-length study
          plans for graduation. Enabled querying of student data and grade distributions for course offerings.
        </li>
      </ul>
      <h3>Enhanced User Experience</h3>
      <ul>
        <li>
          <strong>Exception Handling:</strong> Implemented robust error-handling mechanisms to manage invalid inputs,
          such as incorrect student IDs or unavailable courses.
        </li>
        <li>
          <strong>System Menu:</strong> Designed a clear, hierarchical menu for both students and administrators to
          access system features seamlessly. Included an exit option for users to gracefully close the system.
        </li>
      </ul>
      <h3>Extra Features (Group-Specific)</h3>
      <ul>
        <li>Displayed the most common course pathways within programs.</li>
        <li>Analyzed and ranked elective courses by popularity and difficulty.</li>
        <li>Generated insights into grade distributions for specific courses.</li>
      </ul>
      <h2>Technologies and Tools Used</h2>
      <ul>
        <li>Programming Language: Python</li>
        <li>Data Storage: CSV files for loading programs, courses, offerings, and student data</li>
        <li>Version Control: GitHub for code management with regular commits and branching</li>
        <li>Development Process: Weekly stand-up meetings and Agile development principles to ensure incremental progress and collaboration</li>
      </ul>
      <div className="project-image">
        <h2>Project Image</h2>
        <img src={CourseEnrolmentImage} alt="University Course Enrolment System" />
      </div>
      <a href="/portfolio" className="back-link">
        Back to Portfolio
      </a>
    </div>
  );
};

export default CourseEnrolment;
