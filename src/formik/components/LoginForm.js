import React from 'react';
import { useFormik } from 'formik';
import validate from './validation'

function LoginForm() {
    const initialValues = {
        name: '',
        email: '',
        password: '',
      }
    
    const onSubmit = (values) => {
        console.log(values);
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
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
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    value={formik.values.name} />
                {formik.touched.name && formik.errors.name ? 
                    <div className="errors">{formik.errors.name}</div> : null}
            </div>
            <div className="formControl">
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    value={formik.values.email} />
                {formik.touched.email && formik.errors.email ? 
                    <div className="errors">{formik.errors.email}</div> : null}
            </div>
            <div className="formControl">
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    value={formik.values.password}/>
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