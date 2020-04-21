import React from "react";
import { Field, Form, Formik, FormikProps } from "formik";

const MyInput = ({ field, form, ...props }) => {
  return <input {...field} {...props} />;
};
const onSub = (values, actions) => {
  console.log(values, actions);
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  }, 1000);
};
const FormFormik = () => (
  <div>
    <h1>My Form</h1>
    <Formik
      initialValues={{ email: "", color: "red", firstName: "", lastName: "" }}
      onSubmit={onSub}
    >
      {(props: FormikProps<any>) => (
        <Form>
          <Field type="email" name="email" placeholder="Email" />
          <Field as="select" name="color">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Field>

          <Field name="firstName" placeholder>
            {({
              field, // { name, value, onChange, onBlur }
              form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
              meta,
            }) => (
              <div>
                <input type="text" placeholder="Email" {...field} />
                {meta.touched && meta.error && (
                  <div className="error">{meta.error}</div>
                )}
              </div>
            )}
          </Field>
          <Field name="lastName" placeholder="Doe" component={MyInput} />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default FormFormik;
