import axios from "axios";
import {  BASE_URL, GET_ISSUES } from '../../action-type';

export const getIssue = ({email, descripcion}) => {
  const bodyData = {
    "fields": {
      "project": {
        "id": "10010"
      },
      "summary": `${email})`,
      "description": {
        "type": "doc",
        "version": 1,
        "content": [
            {
            "type": "paragraph",
            "content": [
                {
                "text": descripcion,
                "type": "text"
                }
            ]
            }
        ]
    },
    "reporter": {
      "id": "712020:75da847b-f656-4020-a3fd-84d8811cd76f"
    },
      "issuetype": {
        "id": "10038"
      }
    }
  }
    return async (dispatch) => {
      try {
        const response = (await axios.post(`${BASE_URL}/rest/api/3/search`, bodyData)).data;
        console.log('Respuesta del servidor:', response);
        return dispatch({type: GET_ISSUES, payload: response.issues})

      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
  
      }
    };
};