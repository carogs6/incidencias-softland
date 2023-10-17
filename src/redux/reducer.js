import {
  //PRODUCTS
  POST_ISSUE,
  GET_ISSUES,
  GET_PROJECTS,

} from "./action-type";

const initialState = {
  
  incients: [],

  projects: [],

};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
      //PRODUCTS
      case POST_ISSUE:
          return { ...state, incients: payload };
      case GET_ISSUES:
        return { ...state, incients: payload }
      case GET_PROJECTS:
        return { ...state, projects: payload }

      default:
          return { ...state };
  }
};

export default reducer;