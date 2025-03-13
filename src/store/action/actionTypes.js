const createActionTypes = (base) => ({
  REQUEST: `${base}_REQUEST`,
  SUCCESS: `${base}_SUCCESS`,
  FAILURE: `${base}_FAILURE`,
});

export const CLASSIFICATION_REQUEST = createActionTypes(
  "CLASSIFICATION_REQUEST"
);
