import { FC } from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import "./NewPosts.css";
import Button from "../Button/Button";

interface Values {
  title: string;
  content: string;
  latitude: string;
  longitude: string;
  image_url: string;
}

const onSubmit = (values: Values, helpers: FormikHelpers<Values>) => {
  console.log({ values, helpers });
  setTimeout(() => helpers.setSubmitting(false), 2000);
};

const NewPosts: FC = () => {
  return (
    <div className="NewPosts">
      <h1 className="NewPosts__title">New</h1>
      <Formik
        initialValues={{
          title: "",
          content: "",
          latitude: "",
          longitude: "",
          image_url: "",
        }}
        onSubmit={onSubmit}
      >
        <Form className="NewPosts__form">
          <label htmlFor="title">Title</label>
          <Field id="title" name="title" className="NewPosts__input" />

          <label htmlFor="content">Content</label>
          <Field id="content" name="content" className="NewPosts__input" />

          <label htmlFor="latitude">Latitude</label>
          <Field id="latitude" name="latitude" className="NewPosts__input" />

          <label htmlFor="longitude">Longitude</label>
          <Field id="longitude" name="longitude" className="NewPosts__input" />

          <label htmlFor="image_url">Image URL</label>
          <Field id="image_url" name="image_url" className="NewPosts__input" />

          <Button text="Create" type="submit" />
        </Form>
      </Formik>
    </div>
  );
};

export default NewPosts;
