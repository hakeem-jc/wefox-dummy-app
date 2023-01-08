import { API_URL } from "../common/constants";
import axios from 'axios';

export const list = async () => {
    return axios.get(`${API_URL}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error(error);
    });
}