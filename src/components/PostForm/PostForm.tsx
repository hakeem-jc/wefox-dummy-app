import { FC } from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import "./PostForm.css";
import Button from "../Button/Button";
import axios from "axios";
import { API_URL } from "../../common/constants";
import { FormValues } from "../../interfaces/form_values";

// Set initial values to value from show if its an update
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
    // TODO - Pass function to determine if it should be a new or an update

    alert("New Post Created");
    helpers.setSubmitting(false);
    helpers.resetForm({ values: initialValues });
    document.location.reload();
  });
};

const PostForm: FC = () => {
  return (
    <div className="post-form">
      <h1 className="post-form__title">New</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className="post-form__form">
          <label htmlFor="title">Title</label>
          <Field id="title" name="title" className="post-form__input" />

          <label htmlFor="content">Content</label>
          <Field id="content" name="content" className="post-form__input" />

          <label htmlFor="lat">Latitude</label>
          <Field id="lat" name="lat" className="post-form__input" />

          <label htmlFor="long">Longitude</label>
          <Field id="long" name="long" className="post-form__input" />

          <label htmlFor="image_url">Image URL</label>
          <Field id="image_url" name="image_url" className="post-form__input" />

          <Button text="Create" type="submit" />
        </Form>
      </Formik>
    </div>
  );
};

export default PostForm;
