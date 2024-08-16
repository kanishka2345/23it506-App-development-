
// import React, { useState } from 'react';

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [registrationSuccess, setRegistrationSuccess] = useState(false);

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }
//     // Add your registration logic here (e.g., call to backend API)
//     console.log('Register:', { email, password });
//     // Assuming the registration is successful, update the state
//     setRegistrationSuccess(true);
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleRegister}>
//         <div>
//           <label>Email:</label>
//           <input 
//             type="email" 
//             value={email} 
//             onChange={(e) => setEmail(e.target.value)} 
//             required 
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input 
//             type="password" 
//             value={password} 
//             onChange={(e) => setPassword(e.target.value)} 
//             required 
//           />
//         </div>
//         <div>
//           <label>Confirm Password:</label>
//           <input 
//             type="password" 
//             value={confirmPassword} 
//             onChange={(e) => setConfirmPassword(e.target.value)} 
//             required 
//           />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//       {registrationSuccess && <p>Successfully registered!</p>}
//     </div>
//   );
// };

// export default Register;



import React, { useState } from 'react';
import './Register.css'; // Make sure to import the CSS file

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Add your registration logic here (e.g., call to backend API)
    console.log('Register:', { email, password });
    // Assuming the registration is successful, update the state
    setRegistrationSuccess(true);
  };

  return (
    <div className="register-container">
      {/* <img 
        // src="https://i.pinimg.com/originals/e1/a0/3c/e1a03c5cb92651a9fd9227bd8b0b748d.jpg" 
        alt="Your Image" 
        className="register-image"
      /> */}
      <div className="register-box">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div>
            <label>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label>Password:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input 
              type="password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit">Register</button>
        </form>
        {registrationSuccess && <p>Successfully registered!</p>}
      </div>
    </div>
  );
};

export default Register;

