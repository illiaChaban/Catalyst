import React from 'react';
import { NavLink } from 'react-router-dom';

let Navbar = () => 
    <div>
        {/* <div className="navbar-placeholder"></div> */}
        <nav className="navbar">
            <ul>
                <li><NavLink to="/main/profile-page"><i className="fas fa-user fa-2x hvr-grow"></i></NavLink></li>
                <li><NavLink to="/main/feed"><i className="fas fa-list-ul fa-2x hvr-grow"></i></NavLink></li>
                <li><NavLink to="/main/create-goal"><i className="fas fa-clipboard-check fa-2x hvr-grow"></i></NavLink></li>
                <li><NavLink to="/main/friends"><i className="fas fa-users fa-2x hvr-grow"></i></NavLink></li>
            </ul>
        </nav>
    </div>

export default Navbar;