import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Disini tambahkan logika untuk memeriksa login
    if (username === 'admin' && password === '12345') {
      // Simpan informasi login ke local storage jika Remember Me dicentang
      if (rememberMe) {
        localStorage.setItem('loggedIn', 'true');
      } else {
        localStorage.removeItem('loggedIn');
      }
      // Redirect ke halaman utama
      window.location.href = '/dashboard';
    } else {
      alert('Invalid username or password');
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="login-body">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
            <i className='bx bxs-user'></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <i className='bx bxs-lock-alt'></i>
          </div>
          <div className="remember-forgot">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              Remember Me
            </label>
            <a href="#">Forgot Password</a>
          </div>
          <button type="submit" className="btn">Login</button>
          <div className="register-link">
            <p>Don't have an account? <a href="#">Register</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
