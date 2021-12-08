import React from "react";

const SurveyField = ({
  input,
  label,
  placeholder,
  meta: { error, touched },
}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        {...input}
        placeholder={placeholder}
        style={{ marginBottom: "0.25rem" }}
      />
      <div className="red-text" style={{ marginBottom: "0.75rem" }}>
        {touched && error ? error : null}
      </div>
    </div>
  );
};

export default SurveyField;
