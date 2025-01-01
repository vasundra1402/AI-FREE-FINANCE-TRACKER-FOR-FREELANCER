// import React from "react";
// import "./Form.css";

// const Form = () => {
//   return (
//     <div className="form-container">
//       <h1 className="form-title">Income</h1>
//       <form className="income-form">
//         <div className="form-group">
//           <label htmlFor="companyName">Company Name</label>
//           <input type="text" id="companyName" placeholder="Enter company name" />
//         </div>
//         <div className="form-group">
//           <label htmlFor="amount">Amount</label>
//           <input type="number" id="amount" placeholder="Enter amount" />
//         </div>
//         <div className="form-group">
//           <label htmlFor="date">Date</label>
//           <input type="date" id="date" />
//         </div>
//         <button type="submit" className="create-income-btn">
//           Add Income
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Form;
// import React from "react";
// import "./Form.css"; // Import the CSS file

// const IncomeForm = () => {
//   return (
//     <div className="form-container">
//       <h2 className="form-title">Income</h2>
//       <form>
//         {/* Company Name */}
//         <div>
//           <label htmlFor="companyName" className="label">
//             Company Name
//           </label>
//           <input
//             type="text"
//             id="companyName"
//             placeholder="Enter company name"
//             className="input-field"
//           />
//         </div>

//         {/* Amount */}
//         <div>
//           <label htmlFor="amount" className="label">
//             Amount
//           </label>
//           <input
//             type="number"
//             id="amount"
//             placeholder="Enter amount"
//             className="input-field"
//           />
//         </div>

//         {/* Date */}
//         <div>
//           <label htmlFor="date" className="label">
//             Date
//           </label>
//           <input
//             type="date"
//             id="date"
//             className="input-field date-input"
//           />
//         </div>

//         {/* Button */}
//         <button type="submit" className="submit-button">
//           Create Income
//         </button>
//       </form>
//     </div>
//   );
// };

// export default IncomeForm;
// import React, { useState } from 'react';
// import './Form.css'; // Import CSS
// import SlideNav from './SlideNav';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';


// const Incomeform = () => {
//   const [companyName, setCompanyName] = useState('');
//   const [amount, setAmount] = useState('');
//   const [currency, setCurrency] = useState('INR'); // Default currency is INR
//   const [date, setDate] = useState('');
//   const navigate = useNavigate(); // Initialize navigation hook

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newIncome = {
//       companyName,
//       amount,
//       currency,
//       date,
//     };
    
//     try {
//       // Send the form data to the backend API
//       const response = await fetch('http://localhost:5000/api/incomes',{method:'POST', headers: { 'Content-Type': 'application/json' }, // Set headers for JSON
//       body: JSON.stringify(newIncome)});

//       const result = await response.json();
//       console.log('Income created:', response.data);
      
//       navigate('/income');
//     } catch (error) {
//       console.error('Error adding income:', error);
//     }
//       // Reset form after submit
//       setCompanyName('');
//       setAmount('');
//       setCurrency('INR');
//       setDate('');
//     };
//   const formatCurrency = (value) => {
//     if (currency === 'INR') {
//       return new Intl.NumberFormat('en-IN', {
//         style: 'currency',
//         currency: 'INR',
//       }).format(value);
//     } else if (currency === 'USD') {
//       return new Intl.NumberFormat('en-US', {
//         style: 'currency',
//         currency: 'USD',
//       }).format(value);
//     }

  
//     return value; // Return original value if currency is not INR or USD
//   };
//   const handleClose = () => {
//     navigate('/income'); // Navigate back to Income page on close button click
//   };

//   return (
//     <div className="modal-overlay">
//       <SlideNav/>
//     <div className="income-page-container">
//     <h1>INCOME</h1>
//     <button className="create-income-button"> + Add Income</button>
//     <div className="income-form-container"> {/* Container for centering */}
//       <div className="income-form"> {/* Actual form container */}
//         <h2>Income</h2>
//         <form onSubmit={handleSubmit}>
//         <button className="close-button-income" onClick={handleClose}>
//           <i className="bx bx-x"></i> {/* Close button icon */}
//         </button>
//           <div className="form-group">
//             <label htmlFor="companyName">Company Name</label>
//             <input
//               type="text"
//               id="companyName"
//               value={companyName}
//               onChange={(e) => setCompanyName(e.target.value)}
//               placeholder="Enter company name"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="amount">Amount</label>
//             <div className="currency-input"> {/* Container for input and dropdown */}
//                 <select
//                   id="currency"
//                   value={currency}
//                   onChange={(e) => setCurrency(e.target.value)}
//                 >
//                   <option value="INR">INR</option>
//                   <option value="USD">USD</option>
//                   {/* Add more currencies as needed */}
//                 </select>
//             <input
//               type="number" // Use number input for amount
//               id="amount"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               placeholder="Enter amount"
//               required
//             />
//           </div>
//           </div>
//           <div className="form-group">
//             <label htmlFor="date">Date</label>
//             <input
//               type="date" // Use date input for date
//               id="date"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//               required
//             />
//           </div>
//           <div className="button-container">
//           <button type="submit">Create Income</button>
//           </div>
//         </form>
//       </div>
//     </div>
//     </div>
//     </div>
//   );
// };

// export default Incomeform;

import React, { useState } from 'react';
import './Form.css'; // Import CSS
import SlideNav from './SlideNav';
import { useNavigate } from 'react-router-dom';

const Incomeform = () => {
  const [companyName, setCompanyName] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('INR'); // Default currency
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newIncome = {
      companyName,
      amount: parseFloat(amount), // Convert amount to a number
      currency,
      date,
    };

    try {
      const response = await fetch('http://localhost:5000/api/incomes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newIncome),
      });
      
      if (response.ok) {
        navigate('/income'); // Navigate back to Incomepage
      } else {
        console.error('Failed to add income');
      }
    } catch (error) {
      console.error('Error adding income:', error);
    }

    // Reset form fields
    setCompanyName('');
    setAmount('');
    setCurrency('INR');
    setDate('');
  };

  const handleClose = () => {
    navigate('/income'); // Navigate back to Incomepage
  };

  return (
    <div className="modal-overlay">
      <SlideNav />
      <div className="income-form-container">
        <div className="income-form">
          <h2>Add Income</h2>
          <button className="close-button-income" onClick={handleClose}>
            ✖ 
          </button>
          <form onSubmit={handleSubmit}>
            <div className="form-group ">
              <label htmlFor="companyName">Company Name</label>
              <input 
                type="text"
                id="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Enter company name"
                required
              />
            </div>
            <div className="amount-group">
              <label htmlFor="amount">Amount</label>
              <div className="currency-input"> {/* Container for input and dropdown */}
            <select
              id="currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              >
              <option value="INR">INR</option>
              <option value="USD">USD</option>
                {/* Add more currencies as needed */}  </select>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                required
              />
              </div>
            </div>
            {/* <div className="form-group">
              <label htmlFor="currency">Currency</label>
              <select
                id="currency"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option value="INR">INR</option>
                <option value="USD">USD</option>
              </select>
            </div> */}
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div className="buttoncontainer">
              <button className="createincome" type="submit">Create Income</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

};

export default Incomeform;
