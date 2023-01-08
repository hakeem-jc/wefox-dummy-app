import { API_URL } from "../common/constants";
import axios from 'axios';

export const list = async () => {
    return axios.get(`${process.env.REACT_APP_SERVER_URL}/api/v1/posts`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error(error);
    });
}