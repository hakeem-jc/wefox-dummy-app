import { FC } from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import "./NewPosts.css";
import Button from "../Button/Button";
import axios from "axios";
import { API_URL } from "../../common/constants";
import { FormValues } from "../../interfaces/form_values";

const initialValues = {
  title: "",
  content: "",
  lat: "",
  long: "",
  image_url: "",
};

const onSubmit = (values: FormValues, helpers: FormikHelpers<FormValues>) => {
  console.log(helpers);

  axios.post(API_URL, values).then((_response) => {
    // TODO - Add response to memory

    alert("New Post Created");
    helpers.setSubmitting(false);
    helpers.resetForm({ values: initialValues });
  });
};

const NewPosts: FC = () => {
  return (
    <div className="NewPosts">
      <h1 className="NewPosts__title">New</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className="NewPosts__form">
          <label htmlFor="title">Title</label>
          <Field id="title" name="title" className="NewPosts__input" />

          <label htmlFor="content">Content</label>
          <Field id="content" name="content" className="NewPosts__input" />

          <label htmlFor="lat">lat</label>
          <Field id="lat" name="lat" className="NewPosts__input" />

          <label htmlFor="long">long</label>
          <Field id="long" name="long" className="NewPosts__input" />

          <label htmlFor="image_url">Image URL</label>
          <Field id="image_url" name="image_url" className="NewPosts__input" />

          <Button text="Create" type="submit" />
        </Form>
      </Formik>
    </div>
  );
};

export default NewPosts;
