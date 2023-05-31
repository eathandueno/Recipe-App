import React, { useState } from 'react'
import axios from 'axios';
import './login.css';
const Login = ({onLoginChange, onUserChange}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }
  const handleLogin = () => {
    onLoginChange(true)
  }
  const handleUser = () => {
    onUserChange(username)
  }
  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password
    }
    axios.get('http://localhost:5000/users/login/' + user.username + '/' + user.password)
      .then((res) => {
        if (user.password !== res.data[0].password) {
          setError('Username or Password did not match');
        } else if (user.password === res.data[0].password && user.username === res.data[0].username) {
          console.log('Successful login');
          handleUser();
          handleLogin();
          
        }
      })
      .catch((error) => {
        setError('An error occurred while logging in.');
        console.error(error);
      });
  };

  return (
    <div className='log-container'>
      <h3>Log in</h3>
        <form onSubmit={onSubmit}>
          <p className='error-message'>{error}</p>
          <div className='form-group'>
            <label>Username: </label>
            <input 
              required
              className='form-control'
              onChange={onChangeUsername}
            />
          </div>
          <div className='form-group'>
            <label>Password: </label>
            <input 
              required
              className='form-control'
              onChange={onChangePassword}
            />

          </div>
          <br />
          <div className='form-group'>
              <input type='submit' value="Submit" className='btn btn-primary' />
          </div>
        </form>
    </div>
  )
}

export default Login