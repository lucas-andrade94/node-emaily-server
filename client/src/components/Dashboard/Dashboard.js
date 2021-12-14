import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import "./style.css";
import SurveyList from "../surveys/SurveyList";

const Dashboard = () => {
  return (
    <div className="container">
      <SurveyList />
      <div className="button-container">
        <button className="btn button-survey text-light">
          <Link
            to="/surveys/new"
            className="btn-floating btn-large decoration text-light"
          >
            Add Survey
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
