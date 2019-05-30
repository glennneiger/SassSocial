import React from 'react'
import './Profiles.scss'
import {Link} from 'react-router-dom'

const Profiles = (props) => {
  return (
    <section className="container">
      <h1 className="large text-primary">Developers</h1>
      <p className="lead"><i className="fab fa-connectdevelop"></i>Browse and Connect with Developers</p>
      <div className="profiles">
        <div className="profile bg-light">
          <img className="round-img" src ="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="User Avatar" />
          <div>
            <h2>John Doe</h2>
            <p>Developer at eLink Design</p>
            <p>Lexington, Kentucky</p>
            <Link to='/profile'><button>View Profile</button></Link>
          </div>
          <div>
            <ul>
              <li className="text-primary">
                <i className="fas fa-check"></i>HTML
              </li>
              <li className="text-primary">
                <i className="fas fa-check"></i>CSS
              </li>
              <li className="text-primary">
                <i className="fas fa-check"></i>React
              </li>
              <li className="text-primary">
                <i className="fas fa-check"></i>JavaScript
              </li>
            </ul>
          </div>
        </div>
        <div className="profile bg-light">
          <img className="round-img" src ="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="User Avatar" />
          <div>
            <h2>John Doe</h2>
            <p>Developer at eLink Design</p>
            <p>Lexington, Kentucky</p>
            <Link to='/profile'><button>View Profile</button></Link>
          </div>
          <div>
            <ul>
              <li className="text-primary">
                <i className="fas fa-check"></i>HTML
              </li>
              <li className="text-primary">
                <i className="fas fa-check"></i>CSS
              </li>
              <li className="text-primary">
                <i className="fas fa-check"></i>React
              </li>
              <li className="text-primary">
                <i className="fas fa-check"></i>JavaScript
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profiles