import React from 'react'
import './Register.scss'
import {Link} from 'react-router-dom'

const Register = (props) => {
  return (
    <section className="container">
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i>Create Your Account</p>
      <form className="form">
        <div className="form-group">
          <input type="text" placeholder="Name"/>
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address"/>
          <small className="form-text">This site uses a Gravatar email, so if you want a profile image, use a Gravatar email. </small>
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password"/>
        </div>
        <div className="form-group">
          <input type="password" placeholder="Confirm"/>
        </div>
        <button className="btn btn-primary">Submit</button>

      </form>
      <p className="my-1">
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </section>
  )
}

export default Register