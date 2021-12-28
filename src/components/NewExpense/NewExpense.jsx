import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.scss";

const NewExpense = ({ onSaveExpense }) => {
  const [addExpense, setAddExpense] = useState(true);

  const toggleAddExpense = () => {
    setAddExpense(!addExpense);
  };

  return (
    <div className="new-expense">
      {addExpense ? (
        <button onClick={toggleAddExpense}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpense={onSaveExpense}
          toggleForm={toggleAddExpense}
        />
      )}
    </div>
  );
};

export default NewExpense;
