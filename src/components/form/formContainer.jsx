import { Formik, Form } from "formik";
import PropTypes from "prop-types";
import SendButton from "../bouton/sendButton";

const FormContainer = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
  enableReinitialize = false,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize={enableReinitialize}
    >
      {({ isSubmitting }) => (
        <Form>
          {children}
          <SendButton disabled={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
};

FormContainer.propTypes = {
  initialValues: PropTypes.object.isRequired,
  validationSchema: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  enableReinitialize: PropTypes.bool,
};

export default FormContainer;
