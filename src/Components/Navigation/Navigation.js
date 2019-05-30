import React from 'react';
import './Navigation.scss';
import {Link} from 'react-router-dom';

const Navigation = (props) => {
    return (
        <div>
            <nav className="navbar bg-dark">
                <h1>
                    <Link to='/'><i class="fas fa-code"></i>DevConnector</Link>
                </h1>
                <ul>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                    <li><Link to='/profiles'>Developers</Link></li>
                    <li><Link to='/posts'>Posts</Link></li>
                    <li><Link to='/dashboard'>
                    <i class="fas fa-user"></i>
                    <span className="hide-sm">Dashboard</span></Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation