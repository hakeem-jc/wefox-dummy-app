import { API_URL } from "../common/constants";
import axios from 'axios';

export const show = async (id:number) => {
    return axios.get(`${API_URL}/${id}`)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.error(error);
            })
}