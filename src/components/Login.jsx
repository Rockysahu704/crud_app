// src/components/Login.js
import React, { useState } from 'react';
// import { login } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { url } from '../api/ipaddress';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const user = await login(email, password);
  //     alert('Login successful!');
  //     navigate('/dashboard'); // Redirect to dashboard
  //   } catch (error) {
  //     alert('Login failed: ' + error.message);
  //   }
  // };

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post(`${url}/login`,{email,password})
    .then((response)=>{
      console.log(response.data);
      navigate('/dashboard');
    })
    .catch((err)=>{
      console.log(err);
      navigate("/signup")
    })
  }





  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email : </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      </div>
     

      <div>
        <label >Password : </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      </div>

      <button type="submit">Log In</button>
    </form>
  );
};

export default Login;
