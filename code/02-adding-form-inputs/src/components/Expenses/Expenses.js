import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {

  const [selectedYear, setFilterYear] = useState('');

  const filterBasedOnYear = (year) => {
    setFilterYear(year);
  }
  return (

    <Card className="expenses">
      <ExpenseFilter selected = {selectedYear} filterYear={filterBasedOnYear}/>
      {props.items.map(expense => 
        <ExpenseItem 
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={new Date(expense.date)}
        />)}
    </Card>

    
  );
}

export default Expenses;
