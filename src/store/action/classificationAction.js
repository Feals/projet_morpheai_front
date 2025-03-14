import { classificationRequestActions } from "./actionCreator";
import { showErrorToast } from "../../components/toast/toastService";

export const classificationRequest = (userData) => {
  return async (dispatch) => {
    dispatch(classificationRequestActions.request());
    try {
      const response = await fetch(
        `${import.meta.env.VITE_AI_URL}/classificationDream/request`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Error during the dream classification request"
        );
      }

      const data = await response.json();
      dispatch(classificationRequestActions.success(data));
    } catch (error) {
      dispatch(classificationRequestActions.failure(error.message));
      showErrorToast(error.message);
    }
  };
};
