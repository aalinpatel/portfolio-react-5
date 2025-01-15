import React from "react";
import "./project-details.css"; // Import the shared CSS file
import CancerImage from "../../assets/images/MLCancerous.jpg"; // Replace with your image path

const CancerClassification = () => {
  return (
    <div className="project-detail">
      <h1>Project Summary: Cancer Cell Classification Using Machine Learning</h1>
      <p>
        Developed an end-to-end machine learning system to classify histopathology images of cancer cells, focusing on two tasks: identifying whether cells are cancerous and classifying cell types. This project applied supervised machine learning techniques and emphasized critical analysis, evaluation, and performance comparison.
      </p>
      <h2>Key Features</h2>
      <h3>Objective</h3>
      <ul>
        <li>
          <strong>Task 1:</strong> Classify images as cancerous or non-cancerous.
        </li>
        <li>
          <strong>Task 2:</strong> Classify images by cell type (fibroblast, inflammatory, epithelial, or others).
        </li>
      </ul>
      <h3>Methodology</h3>
      <ul>
        <li>
          <strong>Data Preprocessing:</strong> Normalized 27x27 RGB images for consistency and feature extraction.
          Split dataset into training, validation, and test sets while ensuring label distribution consistency.
        </li>
        <li>
          <strong>Model Selection:</strong> Evaluated multiple supervised learning models, including logistic regression
          and decision trees. Chose support vector machines (SVM) and random forest classifiers based on performance in
          initial trials.
        </li>
        <li>
          <strong>Hyperparameter Tuning:</strong> Utilized grid search and cross-validation to optimize model performance.
        </li>
      </ul>
      <h3>Independent Evaluation</h3>
      <ul>
        <li>
          Compared the model’s accuracy, precision, and recall to benchmarks provided in the literature (e.g., Sirinukunwattana et al., 2016).
        </li>
        <li>
          Demonstrated competitive performance using custom-trained models without leveraging pre-trained architectures.
        </li>
      </ul>
      <h2>Technologies and Tools Used</h2>
      <ul>
        <li>Programming Language: Python</li>
        <li>Libraries: NumPy, Pandas, Scikit-learn, Matplotlib</li>
        <li>Development Environment: Jupyter Notebook</li>
        <li>Version Control: GitHub</li>
      </ul>
      <div className="project-image">
        <h2>Project Image</h2>
        <img src={CancerImage} alt="Cancer Cell Classification Using Machine Learning" />
      </div>
      <a href="/portfolio" className="back-link">
        Back to Portfolio
      </a>
    </div>
  );
};

export default CancerClassification;
