import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.scss";

const ExpenseItem = ({ expense }) => {
  const { date, title, amount } = expense;

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">€{amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
