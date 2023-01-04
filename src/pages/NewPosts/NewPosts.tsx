import { FC } from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import './NewPosts.css';
import Button from '../../components/Button/Button';

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

const NewPosts:FC = () => {
    return (
        <div>
            <h1 className='global-title'>Signup</h1>
            <Formik
                initialValues={{
                title: '',
                content: '',
                latitude: '',
                longitude: '',
                image_url: ''
                }}
                onSubmit={onSubmit}
            >
                <Form>
                    <label htmlFor="title">Title</label>
                    <Field id="title" name="title" />

                    <label htmlFor="content">Content</label>
                    <Field id="content" name="content" />

                    <label htmlFor="latitude">Latitude</label>
                    <Field id="latitude" name="latitude" />

                    <label htmlFor="longitude">Longitude</label>
                    <Field id="longitude" name="longitude" />

                    <label htmlFor="image_url">Image URL</label>
                    <Field id="image_url" name="image_url" />

                    <Button text="Create" type="submit"/>
                </Form>
            </Formik>
        </div>
    );
}

export default NewPosts;