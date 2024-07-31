// // src/api/auth.js
// import api from './axios';

// // Signup function
// export const signup = async (userData) => {
//   try {
//     const response = await api.post('/users', userData);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// // Login function
// export const login = async (email, password) => {
//   try {
//     const response = await api.get('/users');
//     const users = response.data;
//     const user = users.find(user => user.email === email && user.password === password);

//     if (user) {
//       return user;
//     } else {
//       throw new Error('Invalid email or password');
//     }
//   } catch (error) {
//     throw error;
//   }
// };
