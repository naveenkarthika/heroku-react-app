import React from 'react';
import { useFormik } from 'formik';
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

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });

    console.log('formik touched',formik.touched)
    console.log('formik errors',formik.errors)

  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <div className="formControl">
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    {...formik.getFieldProps('name')} />
                {formik.touched.name && formik.errors.name ? 
                    <div className="errors">{formik.errors.name}</div> : null}
            </div>
            <div className="formControl">
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    {...formik.getFieldProps('email')} />
                {formik.touched.email && formik.errors.email ? 
                    <div className="errors">{formik.errors.email}</div> : null}
            </div>
            <div className="formControl">
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    {...formik.getFieldProps('password')}/>
                {formik.touched.password && formik.errors.password ? 
                    <div className="errors">{formik.errors.password}</div> : null}
            </div>
            <button type="submit">Submit</button>
        </form>
        <div style={{ marginTop: '20px'}}>
            {formik && JSON.stringify(formik.values)}
        </div>
    </div>
  )
}

export default LoginForm;