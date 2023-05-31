import './App.css';
import Donate from './components/Donate/Donate';
import SavedRecipes from './components/SavedRecipes/SavedRecipes';
import GenerateRecipe from './components/GenerateRecipe/GenerateRecipe';
import Navbar from './components/navbar';
import Login from './components/Login/login.component';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register/register.component';
import Home from './components/Home/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import Example from './components/Example/Example';
import { useState } from 'react';
import UserNavbar from './components/User-Navbar/User-Navbar';
function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState('');

  const handleLogout = () => {
    setIsLoggedIn(false);
    window.location = '/login'
  }
  const handleLoginChange = (value) => {
    setIsLoggedIn(value)
  }
  const handleUserLogin = (value) => {
    setUser(value)
  }

  return (
    <div className='wrapper'>
      { !isLoggedIn ? 
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/login' element={<Login onLoginChange={handleLoginChange} onUserChange={handleUserLogin}/>} />
          <Route path='/register' element={<Register />} />
          <Route path='/example' element={<Example />} />
        </Routes>
      </Router>
      : 
      <Router>
        <UserNavbar user={user} handleLogout={handleLogout}/>
        <Routes>
          <Route exact path='/generate/:username' element={<GenerateRecipe />} />
          <Route path='/saved/:username' element={<SavedRecipes />} />
          <Route path='/donate' element={<Donate /> } />
        </Routes>
      </Router>
      }
      </div>
  );
}

export default App;
