import React from 'react';
import './Navigation.scss';
import {Link} from 'react-router-dom';

const Navigation = (props) => {
    return (
        <div>
            <nav className="navbar bg-dark">
                <h1>
                    <Link to='/dashboard'><i class="fas fa-code"></i>DevConnector</Link>
                </h1>
                <ul>
                    <li><Link to='/profiles'>Developers</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation