import { API_URL } from "../common/constants";
import axios from 'axios';
import {  FormikHelpers } from "formik";

export const update = async (values:any, helpers: FormikHelpers<any>, current_post:any) => {
    let payload = {
        title:values.title,
        content: values.content,
        lat: values.lat,
        long: values.long,
        image_url: values.image_url
      };

    return  axios.put(`${API_URL}/${current_post.id}`,payload).then((response) => {
        // TODO - Add to memory 
        alert("Post Updated");
        helpers.setSubmitting(false);
      });
}
