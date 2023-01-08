import { API_URL } from "../common/constants";
import axios from 'axios';

export const remove = async (id:number) => {
    return axios.delete(`${API_URL}/${id}`).then(() => {
                alert("Post deleted!");
            })
            .catch(error => {
                console.error(error);
            })
}