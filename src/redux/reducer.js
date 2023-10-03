import {
  //PRODUCTS
  POST_ISSUE,
  GET_ISSUES,

} from "./action-type";

const initialState = {
  //CART
  issues: [],

};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
      //PRODUCTS
      case POST_ISSUE:
          return { ...state, issues: payload };
      case GET_ISSUES:
        return { ...state, issues:payload }


      default:
          return { ...state };
  }
};

export default reducer;