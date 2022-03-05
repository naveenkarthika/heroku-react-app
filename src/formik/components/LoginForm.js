import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik';
import * as Yup from 'yup';
import TextError from './TextError'

function LoginForm() {
    const initialValues = {
        name: '',
        email: '',
        password: '',
        comment: '',
        address: '',
        social: {
            facebook: '',
            instagram: ''
        },
        phoneNumber: ['', ''],
        phNumber: ['']
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
                <FastField name="address" id="address" >
                    {(props) => {
                        console.log('address field rendering')
                        const { field, form, meta } = props;
                        return (
                            <div>
                                <input type="text" id="address" {...field} />
                                {meta.touched && meta.error ? <div className="errors">{meta.error}</div> : null}
                            </div>
                        )
                    }}
                </FastField>
            </div>
            <div className="formControl">
                <label htmlFor="facebook">Facebook</label>
                <Field type="text" name="social.facebook" id="social.instagram" />
            </div>
            <div className="formControl">
                <label htmlFor="instagram">Instagram</label>
                <Field type="text" name="social.instagram" id="social.instagram" />
            </div>
            <div className="formControl">
                <label htmlFor="primaryPhoneNumber">Primary phone number</label>
                <Field type="text" name="phoneNumber[0]" id="phoneNumber[0]" />
            </div>
            <div className="formControl">
                <label htmlFor="secondaryPhoneNumber">Secondary phone number</label>
                <Field type="text" name="phoneNumber[1]" id="phoneNumber[1]" />
            </div>
            <div className="formControl">
                <label htmlFor="list">List of phone numbers</label>
                <FieldArray name="phNumber">
                    {(fieldsProps) => {
                        const { form, push, remove } = fieldsProps;
                        const { values } = form;
                        const { phNumber } = values;
                        return (
                            <div>
                                {
                                    phNumber.map((field, index) => (
                                        <div key={index} className="fieldArray">
                                            <Field type="text" name={`phNumber[${index}]`}/>
                                            <button className="button" onClick={() => push('')}>{' '}+{' '}</button>
                                            {index > 0 && <button className="button" onClick={() => remove(index)}>{' '}x{' '}</button>}
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    }}
                </FieldArray>
            </div>
            <button type="submit">Submit</button>
        </Form>
    </Formik>
  )
}

export default LoginForm;