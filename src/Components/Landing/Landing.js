import React from 'react';
import './Landing.scss'
import {Link} from 'react-router-dom';

const Landing = (props) => {
    return (
        <section class="landing">
        <div class="dark-overlay">
            <div class="landing-inner">
                <h1 className="x-large">Developer Connector</h1>
                <p className="lead">Create developer profile/portfolio, share posts and get help from other developers</p>
                <div class="buttons">
                    <Link to='/register'><button className="btn btn-primary">Register</button></Link>
                    <Link to='/login'><button className="btn btn">Login</button></Link>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Landing;