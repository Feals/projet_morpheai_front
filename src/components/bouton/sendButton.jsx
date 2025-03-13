import PropTypes from "prop-types";
import GenericBoutton from "./genericButton";

const SendButton = ({ className, onAction, type = "submit", disabled }) => {
  return (
    <GenericBoutton
      actionType="green"
      onAction={onAction}
      className={className}
      buttonLabel="Send your dream"
      type={type}
      disabled={disabled}
    />
  );
};

SendButton.propTypes = {
  onAction: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

export default SendButton;
