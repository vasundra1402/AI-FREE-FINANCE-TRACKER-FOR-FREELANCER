// IncomePage.js (New component)
// import React, {useState} from 'react';
// import { Link } from 'react-router-dom';
// import './Incomepage.css';
// import SlideNav from './SlideNav';
// import jsPDF from "jspdf";

// // import * as XLSX from "xlsx";
// // import { saveAs } from "file-saver";



// const Incomepage = () => {
//   const [incomes, setIncomes] = useState([]);

    
//   //   try {
//   //     // Call backend to delete the income
//   //     await axios.delete(`http://localhost:5000/api/incomes/${id}`);
   
//   //     // Update the UI by filtering out the deleted income
//   //     setIncomes(incomes.filter((income) => income._id !== id));
//   //   } catch (error) {
//   //     console.error('Error deleting income:', error);
//   //     alert('Failed to delete the transaction. Please try again.');
//   //   }
//   // };

// // Export to PDF
// const exportToPDF = () => {
// const doc = new jsPDF();
// doc.setFontSize(14);
// doc.text("Income Transactions", 20, 20);

// // Add table headers
// let y = 30;
// doc.text("ID", 20, y);
// doc.text("company name", 50, y);
// doc.text("Amount", 100, y);
// doc.text('Currency', 140, y);
// doc.text("Date", 140, y);


// // Add table rows
// Incomepage.forEach((txn, index) => {
//   y += 10;
//   doc.text((index + 1).toString(), 20, y);
//   doc.text(txn.companyName, 40, y);
//   doc.text(txn.amount.toString(), 100, y);
//   doc.text(txn.currency, 140, y);
//   doc.text(new Date(txn.date).toLocaleDateString(), 180, y);
// });

// // Save PDF
// doc.save("income-transactions.pdf");
// };

// // // Export to Excel
// // const exportToExcel = () => {
// // const worksheet = XLSX.utils.json_to_sheet(Incomepage);
// // const workbook = XLSX.utils.book_new();
// // XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions");
// // XLSX.writeFile(workbook, "income-transactions.xlsx");
// // };
// // // Export to Word
// // const exportToWord = () => {
// // const blob = new Blob(
// //   [
// //     `<html>
// //       <head><title>Income Transactions</title></head>
// //       <body>
// //         <h1>Income Transactions</h1>
// //         <table border="1">
// //           <thead>
// //             <tr>
// //               <th>ID</th>
// //               <th>Source</th>
// //               <th>Amount</th>
// //               <th>Date</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             ${Incomepage
// //               .map(
// //                 (txn) =>
// //                   `<tr>
// //                     <td>${txn.id}</td>
// //                     <td>${txn.source}</td>
// //                     <td>${txn.amount}</td>
// //                     <td>${txn.date}</td>
// //                   </tr>`
// //               )
// //               .join("")}
// //           </tbody>
// //         </table>
// //       </body>
// //     </html>`,
// //   ],
// //   { type: "application/msword" }
// // );
// // saveAs(blob, "income-transactions.doc");
// // };
// console.log('Incomes state:', incomes);

//   return (
//     <div className="income-page-container">
//         <SlideNav/>
//         <div>
//         <h1>INCOME</h1>
//         <Link to="/income/create"> {/* Link to the IncomeForm */}
//            <button className="create-income-button"> + Add Income</button>
//         </Link>
//         {/* other income page content */}
//         <h2>Recent Transactions</h2> {/* Heading for the transactions table */}

        
//         <div className="export-buttons">
//         <button className="export-pdf" onClick={exportToPDF}>
//           Export to PDF
//         </button>
//         {/* <button className="export-excel" onClick={exportToExcel}>
//           Export to Excel
//         </button>
//         <button className="export-word" onClick={exportToWord}>
//           Export to Word
//         </button> */}
//         </div>
//         </div>
//     </div>
    
//   );
// };

// export default Incomepage;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Incomepage.css';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
import SlideNav from './SlideNav';


 


const Incomepage = () => {
  const [incomes, setIncomes] = useState([]); // State to store income data
  const [loading, setLoading] = useState(true); // For loading state
  const [totalAmount, setTotalAmount] = useState(0); // State for total amount
  const [usdToInrRate, setUsdToInrRate] = useState(1); // USD to INR exchange rate
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD'); // Exchange rate API
        const data = await response.json();
        setUsdToInrRate(data.rates.INR); // Set the INR rate from the response
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
        setUsdToInrRate(1); // Fallback rate if the API fails
      }
    };
    
    fetchExchangeRate();
  }, []);

  // Fetch incomes from the backend
  useEffect(() => {
    const fetchIncomes = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/incomes'); // API endpoint
        const data = await response.json();
        setIncomes(data); // Set the fetched data to state
       
        const total = data.reduce((sum, income) => sum + income.amount, 0);
        setTotalAmount(total); // Set total amount to state

        setLoading(false);
      } catch (error) {
        console.error('Error fetching incomes:', error);
        setLoading(false);
      }
    };

    fetchIncomes();
  }, []); // Fetch data on component mount

  useEffect(() => {
    let total = 0;
    incomes.forEach((income) => {
      if (income.currency === 'USD') {
        total += income.amount * usdToInrRate; // Convert USD to INR
      } else {
        total += income.amount; // If already INR, no conversion
      }
    });
    setTotalAmount(total);
  }, [incomes, usdToInrRate]); // Recalculate whenever incomes or the exchange rate change


  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text('Income Transactions', 20, 20);

    // Add table headers
    let y = 30;
    doc.text('ID', 20, y);
    doc.text('Company Name', 50, y);
    doc.text('Amount', 100, y);
    doc.text('Currency', 140, y);
    doc.text('Date', 180, y);

    // Add table rows
    incomes.forEach((income, index) => {
      y += 10;
      doc.text((index + 1).toString(), 20, y);
      doc.text(income.companyName, 50, y);
      doc.text(income.amount.toString(), 100, y);
      doc.text(income.currency, 140, y);
      doc.text(new Date(income.date).toLocaleDateString(), 180, y);
    });

    // Save the file
    doc.save('income-transactions.pdf');
  };

  // Export to Excel
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(incomes);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Incomes');
    XLSX.writeFile(workbook, 'income-transactions.xlsx');
  };

  return (
    <div className="income-page-container">
      <SlideNav/>
      <div>
        <h1>INCOME</h1>
      
          <button className="create-income-button" onClick={() => navigate('/incomecreate')}>+ Add Income</button>
        <div className="export-container">
          <button className="export-button">Export</button>
          <div className="dropdown">
            <button onClick={exportToExcel}> Excel</button>
            <button onClick={exportToPDF}> PDF</button>
          </div>
         {/* Export Button with Dropdown */}
      </div>
        <h2>Recent Transactions </h2>
        
        {loading ? (
          <p>Loading...</p>
        ) : incomes.length === 0 ? (
          <p>There is no data found</p>
        ) : (
          <>
          <table className="income-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Company Name</th>
                <th>Amount</th>
                <th>Currency</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {incomes.map((income, index) => (
                <tr key={income._id}>
                  <td>{index + 1}</td>
                  <td>{income.companyName}</td>
                  <td>{income.amount}</td>
                  <td>{income.currency}</td>
                  <td>{new Date(income.date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
           {/* Display Total Amount */}
           <div className="total-amount">
           <strong>Total Amount: </strong>₹{totalAmount.toFixed(2)}
         </div>
         </>
        )}
    </div>
  </div>
  );
};

export default Incomepage;
