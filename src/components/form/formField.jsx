import { Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";

const FormField = ({ label, name, type, placeholder, className }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <Field
      name={name}
      type={type}
      placeholder={placeholder}
      className={className}
    />
    <ErrorMessage name={name} component="div" className="error" />
  </div>
);

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

FormField.defaultProps = {
  type: "text",
  placeholder: "",
  className: "",
};

export default FormField;
