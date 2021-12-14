import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";

import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";

import { formFields } from "./formFields";

class SurveyForm extends Component {
  renderFields() {
    return formFields.map(({ label, name, placeholder }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
          placeholder={placeholder}
        />
      );
    });
  }

  render() {
    return (
      <div className="container survey-form-container">
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <div className="buttons-form-container">
            <Link to="/surveys" className="btn btn-danger text-light">
              Cancel
            </Link>
            <button type="submit" className="btn btn-success text-light">
              Next
            </button>
          </div>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");

  formFields.map(({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a ${name}`;
    }

    return errors[name];
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);
