import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { classificationRequest } from "../../store/action/classificationAction";
import FormContainer from "./formContainer";
import { dreamSchema } from "./validationSchemas";
import FormField from "./formField";

const DreamForm = () => {
  const dispatch = useDispatch();

  const [initialValues, setInitialValues] = useState({
    descriptionDream: "",
  });

  const handleSubmit = (values) => {
    dispatch(classificationRequest(values));
    console.log("Dream Submitted: ", values.descriptionDream);
  };

  const classificationState = useSelector((state) => state.classification);
  useEffect(() => {
    if (classificationState.error) {
      console.error("Error:", classificationState.error);
    }
  }, [classificationState.error]);

  return (
    <div className="bloc_page">
      <h2>Describe Your Dream and Discover What It Means</h2>
      <FormContainer
        initialValues={initialValues}
        validationSchema={dreamSchema}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        <FormField
          label=""
          name="descriptionDream"
          type="text"
          placeholder="Enter your dream here..."
          className="textArea"
        />
      </FormContainer>
    </div>
  );
};

export default DreamForm;
