import { FC } from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import "./PostForm.css";
import Button from "../Button/Button";
import axios from "axios";
import { API_URL } from "../../common/constants";
// import { FormValues } from "../../interfaces/form_values";
import { useAppSelector } from "../../common/hooks";
import { FormType } from "../../interfaces/form_values";

const PostForm: FC = () => {
  const current_post = useAppSelector(state => state.current_post);
  const form_type = useAppSelector(state => state.form_type);

  const onSubmit = (values: any, helpers: FormikHelpers<any>) => {
    console.log(helpers);
    if (form_type === FormType.NEW){
      // TODO - Check values being sent vs the actual thing
      axios.post(API_URL, values).then((_response) => {
        // TODO - Add to memory 
        alert("New Post Created");
        helpers.setSubmitting(false);
        helpers.resetForm({ values: current_post  });
        document.location.reload();
      });
    } else {
      
      let payload = {
        title:values.title,
        content: values.content,
        lat: values.lat,
        long: values.long,
        image_url: values.image_url
      };

      axios.put(`${API_URL}/${current_post.id}`,payload).then((response) => {
        // TODO - Add to memory 
        alert("Post Updated");
        helpers.setSubmitting(false);
      });
    }
  };

  return (
    <div className="post-form">
      
      <h1 className="post-form__title">New</h1>
      <Formik initialValues={current_post} onSubmit={onSubmit}>
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

          <Button text={form_type === FormType.NEW ? "Create":"Update"} type="submit" />          
        </Form>
      </Formik>
    </div>
  );
};

export default PostForm;
