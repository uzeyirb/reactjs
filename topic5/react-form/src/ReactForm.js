import { Component } from "react"
import { Formik, Form, Field, ErrorMessage } from 'formik';

class ReactForm extends Component {


 defaultFormValue = {email: "", password: ""}


  handleSubmit(form){
    console.log("form", form);
  }

  render() {
    return (
      <Formik
        initialValues={this.defaultFormValue}
        // validate={(values) => {
        //   const errors = {};
        //   if (!values.email) {
        //     errors.email = "Required";
        //   } else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //   ) {
        //     errors.email = "Invalid email address";
        //   }
        //   return errors;
        // }}
     onSubmit =  {this.handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default ReactForm;
