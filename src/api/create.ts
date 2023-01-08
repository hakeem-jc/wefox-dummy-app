import { API_URL } from "../common/constants";
import axios from 'axios';
import {  FormikHelpers } from "formik";

export const create = async (values:any, helpers: FormikHelpers<any>, current_post:any) => {
    return axios.post(API_URL, values).then((_response) => {
        alert("New Post Created");
        helpers.setSubmitting(false);
        helpers.resetForm({ values: current_post  });
      });
}
