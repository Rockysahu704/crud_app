// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import api from '../api/axios'; // Axios instance
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { url } from '../api/ipaddress';

// Dashboard Component
const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', dob: '', password: '' });
  const [editMode, setEditMode] = useState(false); // Track the user being edited
  const navigate = useNavigate();

  // Fetch users from the backend
  // const fetchUsers = async () => {
  //   try {
  //     const response = await api.get('/users');
  //     setUsers(response.data);
  //   } catch (error) {
  //     console.error('Failed to fetch users:', error);
  //   }
  // };

  const fetchUsers = ()=>{
    axios.get(url)
    .then((e)=>{
      console.log(e.data.body);
      setUsers(e.data.body);
    })
    .catch((err)=>{
      console.log(err);
    })


  }


  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle add or update user
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     if (editMode !== null) {
  //       // Update user
  //       const updatedUser = { ...form, id: editMode };
  //       await api.put(`/users/${editMode}`, updatedUser);
  //     } else {
  //       // Add user
  //       await api.post('/users', form);
  //     }
  //     setForm({ name: '', email: '', dob: '', password: '' });
  //     setEditMode(null);
  //     fetchUsers();
  //   } catch (error) {
  //     console.error('Failed to submit user:', error);
  //   }
  // };

  const handleSubmit =(e)=>{
    e.preventDefault();
    axios.put(url,form)
    .then((response)=>{
      console.log(response.data);
      window.location.reload();
    })
    .catch((err)=>{
      console.log(err);
    })
  }




  // Handle edit button click
  const handleEdit = (user) => {
    setForm(user);
    setEditMode(user.id);
  };

  // Handle delete button click
  // const handleDelete = async (id) => {
  //   try {
  //     await api.delete(`/users/${id}`);
  //     fetchUsers();
  //   } catch (error) {
  //     console.error('Failed to delete user:', error);
  //   }
  // };


  const handleDelete = (id) => {
    console.log(`Attempting to delete user with ID: ${id}`);
    axios.delete(`${url}/${id}`)
      .then((response) => {
        console.log('Delete response:', response.data);
        // Remove the deleted user from the users state
        setUsers(users.filter(user => user.id !== id));
      })
      .catch((err) => {
        console.error('Error deleting user:', err);
        alert("Unable to delete user. Please try again.");
      });
  };
  






  return (
    <div>
      <h1>Dashboard</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="date"
          name="dob"
          value={form.dob}
          onChange={handleChange}
          placeholder="Date of Birth"
          required
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit">{editMode ? 'Update' : 'Add'}</button>
        {editMode && <button onClick={() => { setEditMode(null); setForm({ name: '', email: '', dob: '', password: '' }); }}>Cancel</button>}
      </form>

      
      {
         <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            
            <tr key={user.id}>

              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.dob}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> 
      }




    </div>
  );
};

export default Dashboard;
