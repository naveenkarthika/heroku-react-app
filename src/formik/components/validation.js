const validate = (values) => {
    let errors = {};

    if(!values.name) {
        errors.name = 'Required';
    }

    if(!values.email) {
        errors.email = 'Required';
    } else if(values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i.test(values.email)) {
        errors.email = 'Invalid Email';
    }

    if(!values.password) {
        errors.password = 'Required';
    }

    if (values.password && values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters'
    }

    return errors;
}

export default validate;