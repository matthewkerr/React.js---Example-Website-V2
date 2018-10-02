import React from 'react';
import { Field, reduxForm } from 'redux-form'



let contactForm = (props) => {  
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit} className={props.class}>
            <div>
                <label htmlFor="firstName">Name</label>
                <Field name="name" component="input" type="text" className='form-control' placeholder="name" required/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="email" className='form-control' placeholder="you@mail.com" required/>
            </div>
            <div>
                <label htmlFor="email">Message</label>
                <Field name="message" component="textarea" type="text" className='form-control' required/>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

const validate = values => {
    const errors = {};
  
    if (!values.email) {
      console.log('email is required');
      errors.email = 'Required';
    }
  
    if (!values.name) {
      console.log('name is required');
      errors.password = 'Required';
    }

    if (!values.message) {
        console.log('message is required');
        errors.password = 'Required';
      }
  
    return errors;
  };

contactForm = reduxForm({
    // a unique name for the form
    form: 'contact',
    validate
  })(contactForm)

export default contactForm;