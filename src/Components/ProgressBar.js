import React from "react";
import budgets from "./Budget";
import expenses from "./Expense";

const ProgressBar = () => {
  // Debug imported data
  console.log("Budgets:", budgets);
  console.log("Expenses:", expenses);

  // Combine budgets and expenses based on budgetName
  const combinedData = (budgets || []).map((budget) => {
    const expense = expenses.find((exp) => exp.budgetName === budget.budgetName);
    const expenseAmount = expense ? expense.expenseAmount : 0;

    const percentage = Math.min((expenseAmount / budget.totalAmount) * 100, 100);

    return { ...budget, expenseAmount, percentage };
  });

  return (
    <div>
      <h1>Budget Progress</h1>
      {combinedData.map((data, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h3>{data.budgetName}</h3>
          <div
            style={{
              width: "100%",
              height: "20px",
              backgroundColor: "#e0e0df",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${data.percentage}%`,
                height: "100%",
                backgroundColor: "#76c7c0",
                borderRadius: "10px",
                transition: "width 0.3s ease-in-out",
              }}
            ></div>
          </div>
          <p>
            {data.expenseAmount} / {data.totalAmount} ({Math.round(data.percentage)}%)
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;

