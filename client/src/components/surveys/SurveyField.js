import React from "react";

const SurveyField = ({
  input,
  label,
  placeholder,
  name,
  meta: { error, touched },
}) => {
  return (
    <div className="form-group">
      <label for={name}>{label}</label>
      <input
        {...input}
        id={name}
        placeholder={placeholder}
        className="form-control"
        style={{ marginBottom: "0.25rem" }}
      />
      <div className="text-danger" style={{ marginBottom: "0.75rem" }}>
        {touched && error ? error : null}
      </div>
    </div>
  );
};

export default SurveyField;
