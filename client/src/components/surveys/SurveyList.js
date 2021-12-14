import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

import "./style.css";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map((survey) => {
      return (
        <div className="card survey-card-container" key={survey._id}>
          <div className="card-body text-dark">
            <h4 className="card-title">{survey.title}</h4>
            <h6 className="card-text">{survey.body}</h6>
            <div className="survey-dates">
              <p className="card-text">
                Sent on: {new Date(survey.dateSent).toLocaleDateString()}
              </p>
              <p className="card-text">
                Last responded:{" "}
                {survey.lastResponded
                  ? new Date(survey.lastResponded).toLocaleDateString()
                  : "Waiting response"}
              </p>
            </div>
            <p className="card-text results">
              Yes: {survey.yes} | No: {survey.no}
            </p>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container survey-list-container">
        {this.renderSurveys()}
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
