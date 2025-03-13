import PropTypes from "prop-types";

const GenericBoutton = ({
  onAction,
  buttonLabel,
  type,
  disabled,
  className,
}) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onAction}
      disabled={disabled}
    >
      {buttonLabel}
    </button>
  );
};

GenericBoutton.propTypes = {
  onAction: PropTypes.func,
  buttonLabel: PropTypes.string.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

GenericBoutton.defaultProps = {
  type: "button",
  className: "",
};

export default GenericBoutton;
