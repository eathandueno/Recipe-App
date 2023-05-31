import React, { useState } from 'react'
import axios from 'axios';
import './reg.css'
const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      username,
      password
    };
    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data))
    axios.post('http://localhost:5000/tokens/add/' + user.username, user)
      .then(res => console.log(res.data))
    window.location = '/login';
  }

  return (
    <div className='reg-container'>
    <h3>Register</h3>
        <form onSubmit={onSubmit}>
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

export default Register