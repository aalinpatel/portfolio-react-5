import React from "react";
import "./project-details.css"; // Ensure this CSS file matches the theme
import MinecraftVillageImage from "../../assets/images/Village_A.jpg"; // Replace with your actual image

const MinecraftGenerator = () => {
  return (
    <div className="project-detail">
      <h1>Project Summary: Minecraft Procedural Village Generator</h1>
      <p>
        Collaborated on a team-based project to develop a procedural village generator for Minecraft, utilizing the Minecraft Python API (MCPI). The objective was to design and implement a Python script capable of building dynamic, randomly generated villages directly within the Minecraft game environment.
      </p>
      <h2>Key Features:</h2>
      <ul>
        <li>
          <strong>Village Structure and Layout:</strong> Designed a generator that procedurally creates villages with at least five houses connected by a logical road network. The road layout and house placement were randomized for variety across multiple runs, ensuring no two villages looked alike.
        </li>
        <li>
          <strong>House Generation with Recursive Subdivision:</strong> Implemented houses with random dimensions, multiple rooms, and stories using a recursive subdivision algorithm to divide each story into separate rooms.
        </li>
        <li>
          <strong>Terraforming and Natural Landscape Integration:</strong> Developed algorithms to adapt the village to the natural Minecraft terrain, minimizing disruptions to the existing landscape.
        </li>
        <li>
          <strong>Village Decorations and Aesthetics:</strong> Enhanced the visual appeal and liveliness of the villages by adding gardens, streetlamps, trees, fountains, and animal pens.
        </li>
        <li>
          <strong>Code Quality and Collaboration:</strong> The project emphasized modularity and clean coding practices with well-documented code and frequent, meaningful commits.
        </li>
      </ul>
      <h2>Technologies and Tools Used:</h2>
      <ul>
        <li>Programming Language: Python</li>
        <li>API: Minecraft Python API (MCPI)</li>
        <li>Version Control: GitHub</li>
      </ul>
      <div className="project-image">
        <h2>Project Image</h2>
        <img
          src={MinecraftVillageImage} // Replace with the image path
          alt="Minecraft Procedural Village Generator"
        />
      </div>
      <a href="/portfolio" className="back-link">
        Back to Portfolio
      </a>
    </div>
  );
};

export default MinecraftGenerator;
