import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './user-navbar.css'
const UserNavbar = ({ user, handleLogout }) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(user);
  }, [user]);

    return (
        <nav className='logged-nav navbar navbar-expand-lg'>
        <h1>Welcome {user}</h1>
        <div className='navbar-collapse links'>
            <ul className='navbar-nav mr-auto'>
                <li className='navbar-item'>
                    <Link to={`/generate/${username}`} className="nav-link">Generate New Recipe</Link>
                </li>
                <li className='navbar-item'>
                    <Link to={`/saved/${username}`} className="nav-link">Your Saved Recipes</Link>
                </li>
                <li className='navbar-item'>
                    <Link to="/donate" className="nav-link">Donate</Link>
                </li>
                <li className='navbar-item'>
                    <button onClick={handleLogout} className='nav-link'>Logout</button>
                </li>
            </ul>
        </div>
        </nav>
    );
    };

export default UserNavbar;