import React from "react";
import "./project-details.css"; // Import the shared CSS file
import GameImage from "../../assets/images/Games&AI.png"; // Replace with the actual path to your image

const AIGameDev = () => {
  return (
    <div className="project-detail">
      <h1>Project Summary: AI-Enhanced Game Development with Steering Behaviors and Search Algorithms</h1>
      <p>
        Designed and implemented an AI-driven predator-prey game in Unity, showcasing advanced techniques in steering behaviors, finite state machines, and search algorithms. The project emphasized creating realistic movement, strategic decision-making, and enhanced gameplay dynamics using Unity's game engine and AI principles.
      </p>
      <h2>Key Features</h2>
      <h3>Steering Behaviors and Pathfinding:</h3>
      <ul>
        <li>Implemented realistic steering behaviors such as Arrive, Flee, and Obstacle Avoidance for game characters.</li>
        <li>Developed Boids Flocking logic, enabling fly movements with cohesion, separation, and alignment.</li>
        <li>
          Integrated an enhanced A* pathfinding algorithm with diagonal movement and terrain cost differentiation
          (e.g., water vs. dry land).
        </li>
        <li>Added path smoothing for naturalistic and efficient navigation.</li>
      </ul>
      <h3>Finite State Machines (FSMs):</h3>
      <ul>
        <li>
          Designed and implemented hierarchical FSMs for both prey and predators:
          <ul>
            <li>
              <strong>Flies:</strong> Transitioned between states such as "Flocking," "Fleeing," and "CaughtByFrog" based on
              player interactions.
            </li>
            <li>
              <strong>Snakes:</strong> Modeled behaviors like patrolling, aggro (chasing), and harmless states triggered
              by player actions and environmental stimuli.
            </li>
          </ul>
        </li>
      </ul>
      <h3>Game Features and Enhancements:</h3>
      <ul>
        <li>Added bubble mechanics: Players could shoot bubbles that interacted with prey and predators dynamically.</li>
        <li>Developed health and score systems to track player progress, with a real-time overlay for health and fly count.</li>
        <li>Created game over conditions for both victory (catching 10 flies) and loss (running out of health), with a restart feature.</li>
      </ul>
      <h3>Monte Carlo Tree Search (MCTS) in Connect 4:</h3>
      <ul>
        <li>
          Built an MCTS agent for strategic gameplay in Connect 4, using tree-based simulations and intelligent rollouts.
        </li>
        <li>Enhanced the MCTS with advanced heuristics for optimized decision-making under time constraints.</li>
        <li>Compared and tuned AI strategies to create competitive agents.</li>
      </ul>
      <h2>Technologies and Tools Used:</h2>
      <ul>
        <li>Game Engine: Unity LTS Release 2022.3.19f1</li>
        <li>Programming Language: C#</li>
        <li>AI Techniques: Steering Behaviors, Finite State Machines, A* Pathfinding, Monte Carlo Simulations, MCTS</li>
        <li>Version Control: GitHub Classroom</li>
        <li>Physics and Debugging: Unity's Rigidbody2D and Debug utilities for visualizing AI logic and game states</li>
      </ul>
      <h2>Development Process:</h2>
      <ul>
        <li>Adopted an iterative development approach, testing and refining behaviors with real-time feedback.</li>
        <li>Leveraged modular programming to ensure extensibility and maintainability of the codebase.</li>
        <li>Incorporated visual debugging and detailed logs to analyze AI decision-making and gameplay interactions.</li>
      </ul>
      <div className="project-image">
        <h2>Project Image</h2>
        <img src={GameImage} alt="AI-Enhanced Game Development" />
      </div>
      <a href="/portfolio" className="back-link">
        Back to Portfolio
      </a>
    </div>
  );
};

export default AIGameDev;
