import React, {useState} from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';

const Expenses = (props) => {

  const [selectedYear, setFilterYear] = useState('2020');

  const filterBasedOnYear = (year) => {
    setFilterYear(year);
  }

  const arrToFilter =props.items
      .filter(expense => 
          new Date(expense.date).getFullYear().toString() === selectedYear
        );

  return (

    <li>
      <Card className="expenses">
        <ExpenseFilter selected = {selectedYear} filterYear={filterBasedOnYear}/>
        <ExpenseList items = {arrToFilter}/>
      </Card>
    </li>
    

    
  );
}

export default Expenses;
