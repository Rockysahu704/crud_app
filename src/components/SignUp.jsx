// src/components/Signup.js
import React, { useState } from 'react';
// import { signup } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { url } from '../api/ipaddress';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const userData = { name, email, dob, password };
  //     await signup(userData);
  //     alert('Signup successful!');
  //     navigate('/login'); // Redirect to login page after successful signup
  //   } catch (error) {
  //     alert('Signup failed: ' + error.message);
  //   }
  // };



const handleSubmit=(e)=>{
  e.preventDefault();
  console.log("hiiiiiiiiiiiiii");
axios.post(url,{name,email,dob,password})
.then((response)=>{
  console.log(response.data);
  navigate("/login");
})
.catch((err)=>{
  console.log(err);
})
}



  return (
    <form onSubmit={handleSubmit} className='f-signup'>

      <div className='form-outer-div'>  
      <div>
        <label>Name : </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
      </div>

      <div>
          <label>Email : </label>
          <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          />
      </div>
  
      <div>
        <label>DOB : </label>
        <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        placeholder="Date of Birth"
        required
        />
      </div>

      <div>
      <label>Password : </label>
        <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        />
      </div>
   
   
      <button type="submit">Sign Up</button>

      </div>
    </form>
  );
};

export default Signup;
