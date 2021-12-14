import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { formFields } from "./formFields";
import * as actions from "../../actions";

const SurveyFormReview = ({ onGoBack, formValues, submitSurvey, history }) => {
  const reviewFields = formFields.map(({ label, name }) => {
    return (
      <div key={name}>
        <h6>{label}</h6>
        <p>{formValues[name]}</p>
      </div>
    );
  });

  const navigate = useNavigate();

  return (
    <div className="container survey-form-container">
      <h5>Please, confirm your entries</h5>
      {reviewFields}
      <div className="buttons-form-container">
        <button className="btn btn-danger text-light" onClick={onGoBack}>
          Back
        </button>
        <button
          onClick={() => submitSurvey(formValues, navigate)}
          className="btn btn-success text-light"
        >
          Submit Survey
        </button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(SurveyFormReview);
