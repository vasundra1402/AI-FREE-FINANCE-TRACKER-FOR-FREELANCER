// import React from "react";
// import "./Login.css"; // Make sure to create and style this CSS file

// function Login() {
//   return (
//     <div className="login-container">
        
//       {/* Logo Section */}
//       <div className="logo">
//         <h1>
//           <span className="logo-icon">TN</span> TrackNest
//         </h1>
//       </div>

//       {/* Login Form */}
//       <div className="login-form">
//         <h2>Log in</h2>
//         <form>
//           <div className="form-group">
//             <label htmlFor="email"></label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Your email"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password"></label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Password"
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-login">
//             Log In
//           </button>
//         </form>

//         {/* Forgot Password */}
//         <div className="forgot-password">
//           <a href="#">Forgot password?</a>
//         </div>

//         {/* Social Logins */}
//         <div className="social-login">
//           <div className="social-buttons">
//             <button className="btn btn-google">
//             <img src="google_icon.png" alt="Icon" className="btn-icon" />
//             Google</button>
//             <button className="btn btn-facebook">
//             <img src="facebook_icon.png" alt="Icon" className="btn-icon" />
//             Facebook</button>
//           </div>
//         </div>

//         {/* Sign Up Link */}
//         <div className="signup-link">
//           <p>
//             Don't have an account? <a href="/signup">Sign Up</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

// useEffect(() => {
//   const fetchIncomes = async (newIncomeData) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/signup/${email}`);
//       // const newIncome = response.data; 
//       setIncomes(response.data);{email:002,passwrod}
//     } catch (error) {
//       console.error('Error fetching incomes:', error);
//     }
//   };

//   fetchIncomes();
// }, []);



import './Login.css';
import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
//import axios from "axios";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);


  // useEffect(() => {
  //   const fetchUserDetails = async () => {
  //     if (email) {
  //       try {
  //         const response = await fetch(`http://localhost:5000/login?email=${email}`);
  //         if (!response.ok) {
  //           throw new Error((await response.json()).message || "Email not found");
  //         }
  //         const data = await response.json();
  //         setUserDetails(data.user); // Store fetched user details
  //         setMessage(""); // Clear any existing error messages
  //       } catch (error) {
  //         console.error('Error fetching user details:', error);
  //         setMessage(error.message || "Email not found");
  //         setUserDetails(null); // Reset user details if email is not found
  //       }
  //     }
  //   };

  //   fetchUserDetails();
  // }, [email]);
      useEffect(() => {
      const fetchUserDetails = async () => {
        if (email) {
          try {
            const response = await fetch(`http://localhost:5000/login?email=${email}`);
            const data = await response.json();
            if (!response.ok) {
              throw new Error(data.message || "Email or password incorrect");
            }
            setUserDetails(data.user); // Store fetched user details
            setMessage(""); // Clear any existing error messages
          } catch (error) {
            setMessage(error.message || "Email not found or incorrect password");
            setUserDetails(null); // Reset user details if login fails
          }
        }
      };

      fetchUserDetails();
      }, [email]);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
        setMessage("Please provide both email and password.");
        return;
    }

    if (userDetails) {
      if (userDetails.password === password) {
        setMessage("Login successful!");
        navigate("/Dashboard", { state: { email } });
      } else {
        setMessage("Incorrect password.");
      }
    } else {
      setMessage("Email not found. Please try again.");
    }
};

  // const handleLogin = (e) => {
  //   e.preventDefault();

  //   if (userDetails) {
  //     if (userDetails.password === password) {
  //       setMessage("Login successful!");
  //       navigate("/dashboard");
  //     } else {
  //       setMessage("Incorrect password");
  //     }
  //   } else {
  //     setMessage("Email not found. Please try again.");
  //   }
  // };


  return (
    <div className="login-page">
      <div className="left-section">
        <h1>Log in</h1>
        <form className="login-form" onSubmit={handleLogin}>
          <input type="email" placeholder="Your email" className="input-field"
           required
           value={email}
           onChange={(e) => setEmail(e.target.value)}
          />
          <div className="password-container">
            <input 
              type={passwordVisible ? "text" : "password"} // Toggle password visibility
              placeholder="Password" 
              className="input-field"
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
          <button className="login-button">Log In</button>
          <a href="/email" className="forgot-password">Forgot password?</a>
          <div className="divider">or</div>
          <div className="social-buttons">
            <button className="social-button google">
            <img src="google_icon.png" alt="Icon" className="btn-icon" />
              Google</button>
            <button className="social-button facebook">
            <img src="facebook_icon.png" alt="Icon" className="btn-icon" />
              Facebook</button>
          </div>
          <p>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
          <b><p>{message && <span className="error-message">{message}</span>}</p></b>
        </form>
      </div>
      <div className="right-section">
      <img src="login-left-box.jpg" alt="TrackNest_Visualization" className="right-image" />
      </div>
    </div>
  );
}
export default Login;
