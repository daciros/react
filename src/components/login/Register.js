//importar libreria de trabajo
import React from 'react';
import {MDBCard,MDBBtn} from 'mdbreact';

//importar stilos

class Register extends React.Component{
    render(){

        return(
<div className="mdbcard">
  {/* 2 column grid layout with text inputs for the first and last names */}
  <div className="row mb-4">
    <div className="col">
      <div className="form-outline">
        <input type="text" id="form3Example1" className="form-control" />
        <label className="form-label" for="form3Example1">First name</label>
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <input type="text" id="form3Example2" className="form-control" />
        <label className="form-label" for="form3Example2">Last name</label>
      </div>
    </div>
  </div>

  {/* Email input */}
  <div className="form-outline mb-4">
    <input type="email" id="form3Example3" className="form-control" />
    <label className="form-label" for="form3Example3">Email address</label>
  </div>

  {/* Password input */}
  <div className="form-outline mb-4">
    <input type="password" id="form3Example4" className="form-control" />
    <label className="form-label" for="form3Example4">Password</label>
  </div>

  {/* Checkbox */}
  <div className="form-check d-flex justify-content-center mb-4">
    <input
      className="form-check-input me-2"
      type="checkbox"
      value=""
      id="form2Example3"
      checked
    />
    <label className="form-check-label" for="form2Example3">
      Subscribe to our newsletter
    </label>
  </div>

  {/* Submit button */}
  <button type="submit" className="btn btn-primary btn-block mb-4">Sign up</button>

  {/* Register buttons */}
  <div className="text-center">
    <p>or sign up with:</p>
    <button type="button" className="btn btn-primary btn-floating mx-1">
      <i className="fab fa-facebook-f"></i>
    </button>

    <button type="button" className="btn btn-primary btn-floating mx-1">
      <i className="fab fa-google"></i>
    </button>

    <button type="button" className="btn btn-primary btn-floating mx-1">
      <i className="fab fa-twitter"></i>
    </button>

    <MDBBtn type="button" className="btn btn-primary btn-floating mx-1">
      <i className="fab fa-github"></i>
    </MDBBtn>
  </div>
</div>
        );
    }
}
export default Register;