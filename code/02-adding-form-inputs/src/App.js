import React, {useState} from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      cost: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      cost: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      cost: 450,
      date: new Date(2021, 5, 12),
    },
  ];


const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [showForm, setShowForm] = useState(false);

  const getNewExpenseForm = (newExpense) => {
    setExpenses((prevExpenses) 
          => {return [newExpense, ...prevExpenses]})
  }
 
  const showNewExpenseForm = (status) => {
    setShowForm(status);
  }

  let formToRender = <button onClick={() => showNewExpenseForm(true)} className="new-expense">Add new expense</button>;
  if(showForm) {
    formToRender = <NewExpense showForm = {(status) => showNewExpenseForm(status)} formSubmit={getNewExpenseForm}/> 
  }

  return (
    <div>
      {formToRender}
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
