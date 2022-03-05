import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextError from './TextError'

function LoginForm() {
    const initialValues = {
        name: '',
        email: '',
        password: '',
        comment: '',
        address: ''
      }
    
    const onSubmit = (values) => {
        console.log(values);
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Required!'),
        email: Yup.string().email('Invalid Email').required('Required!'),
        password: Yup.string().required('Required!'),
        address: Yup.string().required('Required!')
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
                <ErrorMessage name="name" component={TextError}/>
            </div>
            <div className="formControl">
                <label htmlFor="email">Email</label>
                <Field 
                    type="email" 
                    name="email" 
                    id="email" />
                <ErrorMessage name="email">
                    {(errorMsg) => <div className="errors">{errorMsg}</div>}
                </ErrorMessage>
            </div>
            <div className="formControl">
                <label htmlFor="password">Password</label>
                <Field 
                    type="password" 
                    name="password" 
                    id="password" />
                <ErrorMessage name="password" component={TextError} />
            </div>
            <div className="formControl">
                <label htmlFor="comment">Comment</label>
                <Field 
                    as="textarea" 
                    name="comment"
                    placeholder="Enter the user comment" 
                    rows="5"
                    id="comment" />
            </div>
            <div className="formControl">
                <label htmlFor="address">Address</label>
                <Field name="address" id="address" >
                    {(props) => {
                        const { field, form, meta } = props;
                        return (
                            <div>
                                <input type="text" id="address" {...field} />
                                {meta.touched && meta.error ? <div className="errors">{meta.error}</div> : null}
                            </div>
                        )
                    }}
                </Field>
            </div>
            <button type="submit">Submit</button>
        </Form>
    </Formik>
  )
}

export default LoginForm;