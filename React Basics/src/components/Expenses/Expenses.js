import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const fitlerChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredYearExpenses = props.items.filter((expense) => {
    return expense.data.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={fitlerChangeHandler}
        />
        {filteredYearExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
