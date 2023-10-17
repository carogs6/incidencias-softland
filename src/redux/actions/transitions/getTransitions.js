import axios from "axios";
import { BASE_URL } from "../../action-type";

export const getTransitions = (key) => {
  return async () =>{
    try {
      const response = (await axios.get(`${BASE_URL}/transitions/${key}`)).data
      console.log('response', response);

    } catch (error) {
      console.log('error en getTransitions', error);

    }
  }
}