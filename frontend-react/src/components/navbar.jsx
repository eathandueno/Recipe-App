import React from 'react'
import { Link } from 'react-router-dom';
import salad from './saladDallE.png';
import './colors.css';
import './global.css';
const Navbar = () => {
  const logoStyling = {
    width: '10%',
    height:'10%',
    borderRadius: '45%',
    border: '1px solid white',
    boxShadow: '2px 2px 2px rgba(0,0,0,0.2)'
  }
  
  
    return (
    
        <nav  className='navbar navbar-light lightGreen navbar-expand-lg'>
            <Link to={'/'} className='navbar-brand flex' ><img style={logoStyling} src={salad} alt="dall-e generated salad" /><h1 className='title'>Recipe Builder</h1></Link>
            <div className='navbar-collapse links'>
              <ul className='navbar-nav mr-auto'>
                <li className='navbar-item'>
                  <Link to="/" className='nav-link'>Home</Link>
                </li>
                <li className='navbar-item'>
                  <Link to="/login" className='nav-link'>Login</Link>
                </li>
                <li className='navbar-item'>
                  <Link to="/register" className='nav-link'>Register</Link>
                </li>
                <li className='navbar-item'>
                  <Link to="/example" className='nav-link'>Example</Link>
                </li>
              </ul>
            </div>
        </nav>
  
  )
}

export default Navbar