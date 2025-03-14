import { CLASSIFICATION_REQUEST } from "../action/actionTypes";
import asyncReducer from "./reducerUtils";
const initialState = {
  dream: "",

  loading: false,
  error: null,
};

export default function classificationReducer(state = initialState, action) {
  const asyncActionHandlers = [{ types: CLASSIFICATION_REQUEST, key: "dream" }];

  for (const { types, key } of asyncActionHandlers) {
    const newState = asyncReducer(state, action, types, key);
    if (newState !== state) return newState;
  }
  return state;
}
