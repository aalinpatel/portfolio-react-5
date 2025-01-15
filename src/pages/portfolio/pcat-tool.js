import React from "react";
import "./project-details.css"; // Import shared CSS
import PCATImage from "../../assets/images/PCAT++.png"; // Replace with your image path

const PCATTool = () => {
  return (
    <div className="project-detail">
      <h1>Project Summary: Program and Course Alignment Tool (PCAT++)</h1>
      <p>
        PCAT++ is an advanced tool developed to streamline the alignment of RMIT programs and courses. This tool supports curriculum review by organizing, analyzing, and presenting learning outcomes and assessment details in a consistent and structured manner.
      </p>
      <h2>Key Contributions</h2>
      <ul>
        <li>
          <strong>Course-Level Worksheet Enhancements:</strong> Amended column names, merged headers, and added new tables for enhanced readability and clarity.
        </li>
        <li>
          <strong>Automation and Efficiency:</strong> Ensured data concurrency, reducing manual errors and improving scalability.
        </li>
        <li>
          <strong>Integration of Scraping Framework:</strong> Utilized BeautifulSoup4 for robust web scraping and data extraction.
        </li>
        <li>
          <strong>Team Collaboration and Leadership:</strong> Collaborated with STEM College teams to define requirements and prioritize features.
        </li>
      </ul>
      <h2>Technical Details</h2>
      <ul>
        <li>Backend: Python 3.9 with Flask</li>
        <li>Libraries: BeautifulSoup4, Pandas</li>
        <li>Deployment: Docker containers</li>
        <li>Spreadsheet Integration: openpyxl, xlsxwriter</li>
      </ul>
      <div className="project-image">
        <h2>Project Image</h2>
        <img src={PCATImage} alt="Program and Course Alignment Tool" />
      </div>
      <a href="/portfolio" className="back-link">
        Back to Portfolio
      </a>
    </div>
  );
};

export default PCATTool;
