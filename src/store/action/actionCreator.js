import { CLASSIFICATION_REQUEST } from "./actionTypes";

const createAsyncAction = (types) => ({
  request: () => ({ type: types.REQUEST }),
  success: (data) => ({ type: types.SUCCESS, data }),
  failure: (error) => ({ type: types.FAILURE, error }),
});

export const classificationRequestActions = createAsyncAction(
  CLASSIFICATION_REQUEST
);
