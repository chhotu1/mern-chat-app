import React, {  useState } from 'react';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import AuthService from '../services/AuthService';
import StorageService from '../services/StorageService';
import { CustomLoader } from '../shared';


const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required")
});
const Login = () => {
  const [isLoading, setIsLoading] = useState(false)
  const handleSubmit = (value) => {
    setIsLoading(true)
    AuthService.login(value).then((response) => {
      setIsLoading(false)
      if (response.data.status === true) {
        StorageService.setAccessToken(response.data.token)

        toast.success(response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
        })
        // navigate("/")
        window.location.href="/";
      } else {
        toast.error(response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
        });
      }
    }).catch((error) => {
      setIsLoading(false)
      console.log(error)
    })
  }
  return (
    <div className="container py-4">
      {isLoading?<CustomLoader/>:''}
      <div className="d-flex justify-content-center">
        <div className="col-md-6">
          <div className="card p-4" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
            <p className='text-center'><strong>Join Chat</strong></p>
            <Formik initialValues={{ email: "", password: "" }}
              validationSchema={LoginSchema}
              onSubmit={(values) => handleSubmit(values)}>
              {({ errors }) => (
                <div>
                  <Form className="row g-3 needs-validation">
                    <div className="col-12">
                      <label htmlFor="email" className="form-label">
                        Username
                      </label>
                      <Field
                        type="text"
                        name="email"
                        className="form-control"
                        id="email"
                        required=""
                      />
                      <div className="error">
                        {errors.email}
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="yourPassword" className="form-label">
                        Password
                      </label>
                      <Field
                        type="password"
                        name="password"
                        className="form-control"
                        id="yourPassword"
                        required=""
                      />
                      <div className="error">
                        {errors.password}
                      </div>
                    </div>
                    <div className='d-flex justify-content-between'>
                      <button className="btn btn-primary" type="submit">
                        Login
                      </button>
                      <Link to="/register">New Join Chat</Link>
                    </div>

                  </Form>
                </div>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
