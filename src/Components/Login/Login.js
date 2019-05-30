import React from 'react'
import './Login.scss'
import {Link} from 'react-router-dom';

const Login = (props) => {
  return (
    <section className="container">
      <div className="alert alert-danger">
        Invalid Credentials
      </div>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i>Sign into your account</p>
      <form className="form">
        <div className="form-group">
          <input type="email" placeholder="Email Address"/>
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password"/>
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
      <p className="my-1">
        Don't have an account? <Link to='/register'>Register</Link>
      </p>
    </section>
  )
}

export default Login

