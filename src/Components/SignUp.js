// import React, { useState } from "react";
// import "./SignUp.css"; // Import the corresponding CSS file

// const SignUp = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [repeatPassword, setRepeatPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission (e.g., send data to backend)
//     console.log("Email:", email);
//     console.log("Password:", password);
//     console.log("Repeat Password:", repeatPassword);
//   };

//   return (
//     <div className="signup-container">
//        {/* Left side image */}
//        <div className="signup-image-container">
//           <img src="signup-right-box.png" alt="Sign up" />
//       </div>
//       <div className="signup-form-container">
//       <div className="signup-box">
//         <h2>Sign up</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Repeat Password"
//             value={repeatPassword}
//             onChange={(e) => setRepeatPassword(e.target.value)}
//             required
//           />
//           <button className="signup" type="submit">Sign up</button>
//         </form>
//         <div className="social-login">
//           <button className="google-btn">
//           <img src="google_icon.png" alt="Icon" className="btn-icon" />
//           Google</button>
//           <button className="facebook-btn">
//           <img src="facebook_icon.png" alt="Icon" className="btn-icon" />
//           Facebook</button>
//         </div>
//         <p>
//           Already have an account? 
//           <a href="/login">Log in</a>
//         </p>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default SignUp;


/*********************************************************************/



// import React, { useState } from "react";
// import "./SignUp.css";
// //import axios from 'axios';
// import { useNavigate } from "react-router-dom";
 
// const SignUp = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [repeatPassword, setRepeatPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

// //   const submitForm = async (e) => {
// //     e.preventDefault();
 
// //  if (password !== repeatPassword) {
// //   setMessage("Passwords do not match");
// //   return;
// // }

// //     const apiUrl = 'http://localhost:5000/signup'; // Backend endpoint
// //     try {
// //       const response = await axios.post(apiUrl, {"email":email,
// //       "password":password,
// //       "repeatpassword":repeatPassword});

// //        if (response.status === 201) {    
// //       setMessage("Registration successful! Redirecting to login...");
// //       navigate("/login");
// //     } else {
// //       setMessage("An unexpected error occurred. Please try again.");
// //     }
// //     } catch (error) {
// //       setMessage(`Error: ${error.message}`);
// //     }
// //   };


// const validateEmail = (email) => {
//   const regex = /^[^\s@]+@gmail\.com$/;
//   return regex.test(email);
// };

// const submitForm = async (e) => {
//   e.preventDefault();

  

//   if (!validateEmail(email)) {
//     setMessage("Email must be a valid @gmail.com address.");
//     return;
//   }

//   if (password.length < 8) {
//     setMessage("Password must be at least 8 characters long.");
//     return;
//   }


// // const submitForm = async (e) => {
// //   e.preventDefault();

//   if (password !== repeatPassword) {
//       setMessage("Passwords do not match");
//       return;
//   }

//   const apiUrl = 'http://localhost:5000/signup'; // Backend endpoint
//   try {
//       const response = await fetch(apiUrl, {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//               email: email,
//               password: password,
//               repeatpassword: repeatPassword,
//           }),
//       });

//       if (response.status === 201) {
//           setMessage("Registration successful! Redirecting to login...");
//           navigate("/login");
//       } else {
//           const errorData = await response.json();
//           throw new Error(errorData.message || "An unexpected error occurred. Please try again.");
//       }
//   } catch (error) {
//       console.error('Error during form submission:', error);
//       setMessage(`Error: ${error.message}`);
//   }
// };

//   return (
//     <div className="signup-page">
//       {/* Left Section */}
//       <div className="left-section">
//       <img src="signup-right-box.jpg" alt="TrackNest" className="left-image" />

//       </div>

//       {/* Right Section */}
//       <div className="right-section">
//         <h2>Sign up</h2>

//         <form onSubmit={submitForm} className="signup-form">
//           <input 
//              type="email" 
//              placeholder="Your email" 
//              required 
//              value={email}
//             onChange={(e) => setEmail(e.target.value)} />
//           <input 
//              type="password" 
//              placeholder="Password" 
//              required 
//              value={password}
//              onChange={(e) => setPassword(e.target.value)} />
//           <input 
//              type="password" 
//              placeholder="Repeat Password" 
//              required 
//              value={repeatPassword}
//              onChange={(e) => setRepeatPassword(e.target.value)} />
//           <button type="submit">Sign up</button>
//           <div className="divider">or</div>
//         </form>
//         <div className="social-login">
//         <button className="google-btn">
//         <img src="google_icon.png" alt="Icon" className="btn-icon" />
//         Google</button>
//         <button className="facebook-btn">
//         <img src="facebook_icon.png" alt="Icon" className="btn-icon" />
//         Facebook</button>
//           {/* <button>Google</button>
//           <button>Facebook</button> */}
//         </div>
//         <p>
//           Already have an account? <a href="/login">Log in</a>
//         </p>
//         <div className="error-message">
//         {message && <p className="message">{message}</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;


/****************************************************************************/

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons from react-icons
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [message, setMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility
  const [repeatPasswordVisible, setRepeatPasswordVisible] = useState(false); // State to toggle repeat password visibility
  const navigate = useNavigate();

  // Function to validate the email address
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@gmail\.com$/;
    return regex.test(email);
  };

  // Form submission handler
  const submitForm = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setMessage("Email must be a valid @gmail.com address.");
      return;
    }
    if (!password) {
      setMessage("Password is required");
      return;
    }

    if (!repeatPassword) {
        setMessage("Repeat Password is required")
        return;
    }


    if (password.length < 8) {
      setMessage("Password must be at least 8 characters long.");
      return;
    }

    if (password !== repeatPassword) {
      setMessage("Passwords do not match");
      return;
    }

    const apiUrl = 'http://localhost:5000/signup'; // Backend endpoint
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          repeatpassword: repeatPassword,
        }),
      });

      if (response.status === 201) {
        setMessage("Registration successful! Redirecting to login...");
        navigate("/login");
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || "An unexpected error occurred. Please try again.");
      }
    } catch (error) {
      console.error('Error during form submission:', error);
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="signup-page">
      {/* Left Section */}
      <div className="left-section">
        <img src="signup-right-box.jpg" alt="TrackNest" className="left-image" />
      </div>

      {/* Right Section */}
      <div className="right-section">
        <h2>Sign up</h2>

        <form onSubmit={submitForm} className="signup-form">
          <input 
            type="email" 
            placeholder="Your email" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
          
          {/* Password Input */}
          <div className="password-container">
            <input 
              type={passwordVisible ? "text" : "password"} // Toggle password visibility
              placeholder="Password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
            <span 
              className="eye-icon" 
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          
          {/* Repeat Password Input */}
          <div className="password-container">
            <input 
              type={repeatPasswordVisible ? "text" : "password"} // Toggle repeat password visibility
              placeholder="Repeat Password" 
              required 
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)} 
            />
            <span 
              className="eye-icon" 
              onClick={() => setRepeatPasswordVisible(!repeatPasswordVisible)}
            >
              {repeatPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button type="submit">Sign up</button>
          <div className="divider">or</div>
        </form>

        <div className="social-login">
          <button className="google-btn">
            <img src="google_icon.png" alt="Google Icon" className="btn-icon" />
            Google
          </button>
          <button className="facebook-btn">
            <img src="facebook_icon.png" alt="Facebook Icon" className="btn-icon" />
            Facebook
          </button>
        </div>

        <p>
          Already have an account? <a href="/login">Log in</a>
        </p>

        <div className="error-message"><b>
          {message && <p className="message">{message}</p>}
          </b>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
