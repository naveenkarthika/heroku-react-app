import React from 'react';
import { useFormik } from 'formik';

function LoginForm() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        }
    });

  return (
    <div>
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" onChange={formik.handleChange} value={formik.values.name} />
            
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={formik.handleChange} value={formik.values.email} />
            
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={formik.handleChange} value={formik.values.password}/>

            <button>Submit</button>
        </form>
        <div style={{ marginTop: '20px'}}>
            {formik && JSON.stringify(formik.values)}
        </div>
    </div>
  )
}

export default LoginForm;