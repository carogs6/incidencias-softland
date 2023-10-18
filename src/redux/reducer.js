import {
  //PRODUCTS
  POST_ISSUE,
  GET_ISSUES,
  GET_PROJECTS,
  POST_USER,

} from "./action-type";

const initialState = {
  
  incients: [],

  projects: [],

  user: {},

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
      case POST_USER:
        return { ...state, user: payload }

      default:
          return { ...state };
  }
};

export default reducer;