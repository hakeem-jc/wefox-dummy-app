import { FC } from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import "./PostForm.css";
import Button from "../Button/Button";
// import { FormValues } from "../../interfaces/form_values";
import { useAppSelector,useAppDispatch } from "../../common/hooks";
import { FormType } from "../../interfaces/form_values";
import * as yup from 'yup';
import { create } from "../../api/create";
import { update } from "../../api/update";
import { setRefreshPosts } from "../../features/post/postSlice";
const isUrl = require("is-valid-http-url");


const PostForm: FC = () => {
  const dispatch = useAppDispatch();
  const { current_post, form_type , refresh_posts} = useAppSelector(state => state);

  const onSubmit = (values: any, helpers: FormikHelpers<any>) => {
  
    if (form_type === FormType.NEW){
      create(values, helpers,current_post);
      dispatch(setRefreshPosts(refresh_posts + 1));
    } else {
      update(values, helpers,current_post);
      dispatch(setRefreshPosts(refresh_posts + 1));
    }
  };

  const ValidationSchema = yup.object().shape({
    title: yup.string()
      .max(50, 'Titles can\'t be longer than 50 characters')
      .required('Required'),
   content: yup.string()
      .max(50, 'Content can\'t be longer than 50 characters')
      .required('Required'),
    lat: yup.number()
      .max(50, 'Latitude coordinates can\'t be longer than 50 characters')
      .required('Required'),
    long: yup.number()
      .max(50, 'Longitude coordinates can\'t be longer than 50 characters')
      .required('Required'),
    image_url: yup.string()
    .test(url=>{
      if (url) {
        return isUrl(url);
      }
    })



      // .test(url => {
      //   if (isUrl(url)) {
      //     // @ts-ignore
      //     // return this.createError({ message: 'Invalid URL'});
      //   }})
      .required('Required'),
  
  });

  return (
    <div className="post-form">
      
      <div className="post-form__title-container">
        <h1 className="post-form__title">New</h1>
      </div>
      
      <Formik initialValues={current_post} validationSchema={ValidationSchema} onSubmit={onSubmit}>
      {({ errors, touched }) => (
        <Form className="post-form__form">
          <label htmlFor="title">Title</label>
          <Field id="title" name="title" className="post-form__input"  />
          {(errors.title && touched.title) && <p className="post-form__error_text">{errors.title}</p>}

          <label htmlFor="content">Content</label>
          <Field id="content" name="content" className="post-form__input" />
          {(errors.content && touched.content) && <p className="post-form__error_text">{errors.content}</p>}

          <label htmlFor="lat">Latitude</label>
          <Field id="lat" name="lat" className="post-form__input" />
          {(errors.lat && touched.lat) && <p className="post-form__error_text">{errors.lat}</p>}

          <label htmlFor="long">Longitude</label>
          <Field id="long" name="long" className="post-form__input" />
          {(errors.long && touched.long) && <p className="post-form__error_text">{errors.long}</p>}

          <label htmlFor="image_url">Image URL</label>
          <Field id="image_url" name="image_url" className="post-form__input" />
          {(errors.image_url && touched.image_url) && <p className="post-form__error_text">{errors.image_url}</p>}

          <Button text={form_type === FormType.NEW ? "Create":"Update"} type="submit" />          
        </Form>
      )}
      </Formik>
    </div>
  );
};

export default PostForm;
