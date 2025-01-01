// import React, {useEffect, useState } from "react";
// import './Budget.css';
// import { useNavigate } from 'react-router-dom';


// import { FaHome, FaWallet, FaMoneyBillWave, FaFileInvoice, FaBell, FaMoon } from "react-icons/fa";
// import { AiOutlineLogout } from "react-icons/ai";
// import { MdAccountCircle, MdOutlineAttachMoney } from "react-icons/md";

// const Budget = () => {
//   const navigate = useNavigate();
//   const [budgets, setBudgets] = useState([]); // State to store budget records

//     const [darkMode, setDarkMode] = useState(false);
    
//       const toggleDarkMode = () => {
//         setDarkMode(!darkMode);
//         if (!darkMode) {
//           document.body.classList.add("dark-mode");
//         } else {
//           document.body.classList.remove("dark-mode");
//         }
//       };
// const fetchBudgets = async () => {
//   try {
//     const response = await fetch('http://localhost:5000/api/budget');
//     if (response.ok) {
//       const data = await response.json();
//       setBudgets(data); // Set the fetched data to state
//     } else {
//       console.error('Failed to fetch budgets.');
//     }
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// useEffect(() => {
//   fetchBudgets(); // Fetch budgets on component mount
// }, [navigate]);

// return (
//   <div className="budget-page">
    
//     <h1>Budget</h1>
//       {/* Create New Budget Card */}
//       <div 
//         className="budget-card create-new"
//         onClick={() => navigate('/create-budget')}
//         style={{ cursor: 'pointer', marginLeft:"40px" }}
//       >
//          {/* <NavLink to="/Budget/create"> {/* Link to the IncomeForm */}
//          <h2>+ Create New Budget</h2>
//         {/* </NavLink>  */}
//         {/* Display Budget Cards */}
//       <div className="budget-cards-container">
//         {budgets.map((budget) => (
//           <div className="budget-card" key={budget._id}>
//             <h3>{budget.budgetName}</h3>
//             <p>₹ {budget.limit.toLocaleString()}</p>

//             {/* Progress Bar */}
//             <div className="progress-bar-container">
//                 <div
//                     className="progress-bar"
//                     style={{
//                         width: `${(budget.spent / budget.limit) * 100}%`,
//                         backgroundColor: budget.spent > budget.limit ? 'red' : 'green',
//                  }}
//               ></div>
//             </div>
//             <p>Spent: {budget.spent} / {budget.limit}</p>
//           </div>
//         ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Budget;
// import React, { useEffect, useState } from "react";
// import './Budget.css';
// import { useNavigate } from 'react-router-dom';
 

// const Budget = () => {
//   const navigate = useNavigate();
//   const [budgets, setBudgets] = useState([]);
//   const [expenses, setExpenses] = useState([]); // To store expenses with spent amounts
  
//   useEffect(() => {
//     const fetchBudgets = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/budgets"); // Replace with your backend endpoint
//         const data = await response.json();
//         setBudgets(data.budgets || []); // Assuming the backend returns an array of budgets
//       } catch (error) {
//         console.error("Error fetching budgets:", error);
//       }
      
//     };

//     fetchBudgets();
//   }, []);

//   useEffect(() => {
//     const fetchExpenses = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/expenses"); // Replace with your backend endpoint
//         const data = await response.json();

//         // Calculate spent amount for each budget
//         const updatedBudgets = budgets.map((budget) => {
//           const budgetExpenses = data.expenses.filter(
//             (expense) => expense.budgetTitle === budget.name // Match budget name
//           );

//           // Sum spent amount for this budget
//           const spentAmount = budgetExpenses.reduce((total, expense) => {
//             return total + expense.expenses.reduce((sum, item) => sum + item.amount, 0);
//           }, 0);

//           return { ...budget, spent: spentAmount }; // Add spent amount to budget
//         });

//         setExpenses(updatedBudgets);
//       } catch (error) {
//         console.error("Error fetching expenses:", error);
//       }
//     };

//     fetchExpenses();
//   }, [budgets]); // Refetch expenses whenever budgets change

//   // const fetchBudgets = async () => {
//   //   try {
//   //     const response = await fetch('http://localhost:5000/api/budget');
//   //     if (response.ok) {
//   //       const data = await response.json();
//   //       setBudgets(data);
//   //     } else {
//   //       console.error('Failed to fetch budgets.');
//   //     }
//   //   } catch (error) {
//   //     console.error('Error:', error);
//   //   }
//   // };
//   // useEffect(() => {
//   //   fetchBudgets();
//   // }, [navigate]);


//   return (
//     <div className="budget-page">
//       <h1>Budget
//       </h1>
//       {/* Create New Budget Card */}
//       <div
//         className="budget-card create-new"
//         onClick={() => navigate('/create-budget')}
//         style={{ cursor: 'pointer' }}
//       >
//         <h2>+ Create New Budget</h2>
//       </div>
      // {/* Budget Cards with Progress Bars */}
      // <div className="budget-cards">
      //   {expenses.map((budget, index) => {
      //     const progress = Math.min((budget.spent / budget.amount) * 100, 100); // Calculate progress percentage

      //     return (
      //       <div key={index} className="budget-card">
      //         <h3>{budget.name}</h3>
      //         <div className="budget-amount">
      //           <span>Total: ₹{budget.amount}</span>
      //           <span>Spent: ₹{budget.spent}</span>
      //         </div>
      //         {/* Progress Bar */}
      //         <div className="progress-bar">
      //           <div
      //             className="progress"
      //             style={{ width: `${progress}%`, backgroundColor: '#4a90e2' }}
      //           ></div>
      //         </div>
      //       </div>
      //     );
//         })}
//       </div>
//       </div>
//   );
// };

// export default Budget;
import React, { useEffect, useState } from "react";
import './Budget.css';
import { useNavigate } from 'react-router-dom';
import SlideNav from "./SlideNav";

const Budget = () => {
  const navigate = useNavigate();
  const [budgets, setBudgets] = useState([]); // To store budget data
  // const [expenses, setExpenses] = useState([]); // To store expense data
  // const [budgetDetails, setBudgetDetails] = useState([]); // Merged budget and expense data with progress calculation

  // Fetch budgets from API
  useEffect(() => {
    const fetchBudgets = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/budgets");
        const data = await response.json();
        const fetchedBudgets = data.budgets || [];

        // Add `progress` calculation for each budget based on the fetched data
        const budgetsWithProgress = fetchedBudgets.map((budget) => ({
          ...budget,
          spent: budget.spent || 0, // Use `spent` if it exists; default to 0
          progress:
            budget.amount > 0
              ? Math.min((budget.spent / budget.amount) * 100, 100)
              : 0, // Calculate progress percentage
        }));

        setBudgets(budgetsWithProgress);
      } catch (error) {
        console.error("Error fetching budgets:", error);
      }
    };
    fetchBudgets();
  }, []);

  // Fetch expenses from API
  // useEffect(() => {
  //   const fetchExpenses = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/api/expenses");
  //       const data = await response.json();
  //       console.log("Expenses Data:", data.expenses); // Check expense data
  //       setExpenses(data.expenses || []); // Assuming backend returns an array of expenses
  //     } catch (error) {
  //       console.error("Error fetching expenses:", error);
  //     }
  //   };
  //   fetchExpenses();
  // }, []);

  // Calculate spent amounts and progress when budgets or expenses change
  // useEffect(() => {
  //   const calculateBudgetDetails = () => {
  //     const mergedData = budgets.map((budget) => {
  //       const matchingExpenses = expenses.filter((expense) => {
  //         const isMatch = expense.budgetTitle === budget.name; // Match budget name
  //         console.log(`Matching ${expense.budgetTitle} with ${budget.name}: ${isMatch}`);
  //         return isMatch;
  //      });

  //      // Log matching expenses
  //     console.log(`Budget: ${budget.name}, Matching Expenses:`, matchingExpenses);

  //       // Calculate total spent for this budget
  //       const totalSpent = matchingExpenses.reduce(
  //         (sum, expense) => sum + expense.amount, 
  //        0
  //       );

  //       console.log(`Budget: ${budget.name}, Total Spent: ₹${totalSpent}`);

  //       // Calculate progress percentage
  //       const progress =  
  //           budget.amount > 0 ? Math.min((totalSpent / budget.amount) * 100, 100): 0;

  //       return {
  //         ...budget,
  //         spent: totalSpent,
  //         progress,
  //       };
  //     });
  //     console.log("Budget Details:", mergedData); // Debug merged data
  //     setBudgetDetails(mergedData);
  //   };

  //   calculateBudgetDetails();
  // }, [budgets, expenses]);

  return (
    <div className="budget-page">
      <SlideNav/>
      <h1>Budgets</h1>
      {/* Create New Budget Card */}
      <div
        className="budget-card create-new"
        onClick={() => navigate('/create-budget')}
        style={{ cursor: 'pointer' }}
      >
        <h2>+ Create New Budget</h2>
      </div>

      {/* Render Budget Cards */}
      <div className="budget-cards">
         {budgets.map((budget) => (
          <div key={budget.id} className="budget-card">
            <h3>{budget.name}</h3>
            <div className="budget-amount">
              <span>Total: ₹{budget.amount}</span>
              <span>Spent: ₹{budget.spent || 0}</span> {/* spent amount*/}
      </div>
      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${budget.progress ?(budget.spent / budget.amount) * 100 : 0}%`,
            backgroundColor: budget.progress >= 100 ? "red" : "#3546AB", // Change color if exceeded,
          }}
        ></div>
      </div>
    </div>
  ))}
</div>
</div>
   
  );
};

export default Budget;

