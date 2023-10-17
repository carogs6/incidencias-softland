import axios from "axios";
import { BASE_URL, GET_PROJECTS } from '../../action-type';

export const getProjects = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${BASE_URL}/project/search`);
      console.log('hooli');
      console.log('Respuesta del servidor:', response);

      // Asegúrate de enviar la data como payload
      dispatch({ type: GET_PROJECTS, payload: response.data });

      // Puedes devolver la data si es necesario para el componente que llamó a la acción
      return response.data;
    } catch (error) {
      console.log('Error al realizar la solicitud getProjects:', error);
      // Lanza el error para que pueda ser manejado en el componente
      throw error;
    }
  };
};
