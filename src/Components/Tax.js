// import React, { useState } from "react";
// import "./TaxCalculator.css";
// import "./slidenav.css";

// const TaxCalculator = () => {
//   const [income, setIncome] = useState("");
//   const [deductions, setDeductions] = useState("");

//   const handleCalculate = () => {
//     // Logic for calculating tax
//   };

//   return (
//     <div className="tax-calculator-container">

//       <div className="title" >Tax</div>
//       <div className="content">
//         <h1>Tax Calculator</h1>
//         <form className="tax-form">
//           <div className="form-group">
//             <label>Assessment Year *</label>
//             <select>
//               <option>2023-24</option>
//               <option>2022-23</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label>Taxpayer Category *</label>
//             <select>
//               <option>Individual</option>
//               <option>HUF</option>
//               <option>Company</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label>Residential Status *</label>
//             <select>
//               <option>RES</option>
//               <option>NRES</option>
//             </select>
//           </div>
//           {/* <div className="age-group">
//             <button type="button" className="active">
//               Below 60 years (Regular Citizen)
//             </button>
//             <button type="button">Between 60-79 years (Senior Citizen)</button>
//             <button type="button">80 and above (Super Senior Citizen)</button>
//           </div> */}
//           <div className="form-group">
//             <label>Total Annual Income *</label>
//             <input
//               type="number"
//               value={income}
//               onChange={(e) => setIncome(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label>Total Deductions</label>
//             <input
//               type="number"
//               value={deductions}
//               onChange={(e) => setDeductions(e.target.value)}
//             />
//           </div>
//           <div className="tax-tables">
//             <div>
//               <h3>Old Tax Regime</h3>
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Net Taxable Income Slabs</th>
//                     <th>Tax Rate</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>Upto ₹2.5 Lakhs</td>
//                     <td>0%</td>
//                   </tr>
//                   <tr>
//                     <td>₹2.5 Lakhs - ₹5 Lakhs</td>
//                     <td>5%</td>
//                   </tr>
//                   <tr>
//                     <td>₹5 Lakhs - ₹10 Lakhs</td>
//                     <td>20%</td>
//                   </tr>
//                   <tr>
//                     <td>Above ₹10 Lakhs</td>
//                     <td>30%</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//             <div>
//               <h3>New Tax Regime</h3>
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Net Taxable Income Slabs</th>
//                     <th>Tax Rate</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>Upto ₹3 Lakhs</td>
//                     <td>0%</td>
//                   </tr>
//                   <tr>
//                     <td>₹3 Lakhs - ₹6 Lakhs</td>
//                     <td>5%</td>
//                   </tr>
//                   <tr>
//                     <td>₹6 Lakhs - ₹9 Lakhs</td>
//                     <td>10%</td>
//                   </tr>
//                   <tr>
//                     <td>₹9 Lakhs - ₹12 Lakhs</td>
//                     <td>15%</td>
//                   </tr>
//                   <tr>
//                     <td>Above ₹12 Lakhs</td>
//                     <td>20%</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//           <button type="button" onClick={handleCalculate}>
//             Calculate
//           </button>
//         </form>
//         <div className="tax-summary">
//           <h3>Tax Summary</h3>
//           <p>Total Annual Income: ₹{income || 0}</p>
//           <p>Total Deductions: ₹{deductions || 0}</p>
//           <p>Tax Amount (as per old regime): ₹0</p>
//           <p>Tax Amount (as per new regime): ₹0</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaxCalculator;


/***************************************************************************/
import React, { useState } from "react";
import "./Tax.css";
import SlideNav from "./SlideNav";


const Tax = () => {
  const [income, setIncome] = useState("");
  const [deductions, setDeductions] = useState("");
  const [tax, setTax] = useState(0); // Calculated tax
  const [message, setMessage] = useState(""); // For error messages
  const [expenses, setExpenses] = useState(""); // Total expenses (e.g., ₹5,00,000)
  


  // const handleCalculate = () => {
  //   // Tax calculation logic
  // };
  function calculateTax() {
    const incomeAmount = parseFloat(income);
    const expenseAmount = parseFloat(expenses);

    if (isNaN(incomeAmount) || isNaN(expenseAmount)) {
      setMessage("Please enter valid numbers for income and expenses.");
      setTax(0);
      return;
    }

    const taxableIncome = incomeAmount - expenseAmount; // Taxable income = Total income - Expenses
    let taxAmount = 0;

    // Tax calculation logic as per New Tax Regime
    if (taxableIncome > 1500000) {
      taxAmount =
        ((taxableIncome - 1500000) * 0.30) +
        150000; // Tax for income above ₹15,00,000
    } else if (taxableIncome > 1200000) {
      taxAmount =
        ((taxableIncome - 1200000) * 0.20) +
        90000; // Tax for income between ₹12,00,001 and ₹15,00,000
    } else if (taxableIncome > 900000) {
      taxAmount =
        ((taxableIncome - 900000) * 0.15) +
        45000; // Tax for income between ₹9,00,001 and ₹12,00,000
    } else if (taxableIncome > 600000) {
      taxAmount =
        ((taxableIncome - 600000) * 0.10) +
        15000; // Tax for income between ₹6,00,001 and ₹9,00,000
    } else if (taxableIncome > 300000) {
      taxAmount = (taxableIncome - 300000) * 0.05; // Tax for income between ₹3,00,001 and ₹6,00,000
    } else {
      taxAmount = 0; // No tax for income up to ₹3,00,000
    }

    setTax(taxAmount); // Set the calculated tax
    setMessage(""); // Clear any previous error message
  }


  return (
    <div className="tax">
      <SlideNav/>
    <div className="tax-container">
      <div className="tax-header">
        <h2>Tax</h2>
      </div>
      <div className="tax-content">
        <div className="tax-calculator">
          <h1>Calculator</h1>
          
          <form className="tax-form">
            <div className="form-row">
              <div className="form-group">
                <label>Assessment Year *</label>
                <select>
                  <option>2034-35</option>
                  <option>2033-34</option>
                  <option>2032-33</option>
                  <option>2031-32</option>
                  <option>2030-31</option>
                  <option>2029-30</option>
                  <option>2028-29</option>
                  <option>2027-28</option>
                  <option>2026-27</option>
                  <option>2025-26</option>
                  <option>2024-25</option>
                  <option>2023-24</option>
                  <option>2022-23</option>
                </select>
              </div>
              <div className="form-group">
                <label>Taxpayer Category *</label>
                <select>
                  <option>Individual</option>
                  <option>HUF</option>
                  <option>Company</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Residential Status *</label>
                <select>
                  <option>RES</option>
                  <option>NRES</option>
                </select>
              </div>
              <div className="form-group">
                <label>Total Annual Income *</label>
                <input
                  type="number"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Total Deductions</label>
              <input
                type="number"
                value={expenses}
                onChange={(e) => setExpenses(e.target.value)}
              />
            </div>
            
            <div className="button-tax-container">
              <button  type="button" onClick={calculateTax} className="calculate-tax-button">
              Calculate Tax
              </button>
            </div>
          </form>
        </div>
        <div className="tax-summary">
          <h3>Tax Summary</h3>
          <p>Total Annual Income: ₹{income || 0}</p>
          <p>Total Deductions: ₹{expenses || 0}</p>
          {/* <p>Tax Amount (New Regime): ₹{tax ||0}</p> */}
          <p className="new-regime-tax">Tax Amount (New Regime): ₹{tax || 0}</p>
        </div>
      </div>
      <div className="tax-slabs">
      <div className="regime">
      <h3>New Tax Regime</h3>
          <img src="new_regime.png" alt="new regime" />
        </div>
      </div> 
    </div>
    </div>
  );
};

export default Tax;
