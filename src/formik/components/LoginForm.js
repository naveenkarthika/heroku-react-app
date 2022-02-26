import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function LoginForm() {
    const initialValues = {
        name: '',
        email: '',
        password: '',
      }
    
    const onSubmit = (values) => {
        console.log(values);
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Required!'),
        email: Yup.string().email('Invalid Email').required('Required!'),
        password: Yup.string().required('Required!')
    })

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form>
            <div className="formControl">
                <label htmlFor="name">Name</label>
                <Field 
                    type="text" 
                    name="name" 
                    id="name" />
                <ErrorMessage name="name"/>
            </div>
            <div className="formControl">
                <label htmlFor="email">Email</label>
                <Field 
                    type="email" 
                    name="email" 
                    id="email" />
                <ErrorMessage name="email"/>
            </div>
            <div className="formControl">
                <label htmlFor="password">Password</label>
                <Field 
                    type="password" 
                    name="password" 
                    id="password" />
                <ErrorMessage name="password"/>
            </div>
            <button type="submit">Submit</button>
        </Form>
    </Formik>
  )
}

export default LoginForm;