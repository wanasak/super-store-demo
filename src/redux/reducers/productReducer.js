import { ActionTypes } from "../constants/action-types";

const intialState = {
  products: [],
  product: {},
};

export const productReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, product: payload };

    case ActionTypes.REMOVE_SELETED_PRODUCT:
      return { ...state, product: {} };

    default:
      return state;
      break;
  }
};
