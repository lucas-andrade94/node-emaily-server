import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { formFields } from "./formFields";
import * as actions from "../../actions";

const SurveyFormReview = ({ onGoBack, formValues, submitSurvey, history }) => {
  const reviewFields = formFields.map(({ label, name }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <p>{formValues[name]}</p>
      </div>
    );
  });

  const navigate = useNavigate();

  return (
    <div>
      <h5>Please, confirm your entries</h5>
      {reviewFields}
      <button className="red white-text btn-flat" onClick={onGoBack}>
        Back
      </button>
      <button
        onClick={() => submitSurvey(formValues, navigate)}
        className="green white-text btn-flat right"
      >
        Submit Survey <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(SurveyFormReview);
