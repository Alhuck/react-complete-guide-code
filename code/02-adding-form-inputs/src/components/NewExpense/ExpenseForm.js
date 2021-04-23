import React, {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

  // let expenseForm = {
  //   cost: 0,
  //   date: new Date(),
  //   title: ""
  // };

  const [title, setTitle] = useState('');
  const [cost, setCost] = useState('');
  const [date, setDate] = useState('');

  const submitForm = (e) => {
    e.preventDefault();

    const expenseForm = {
      id: Math.random(),
      title: title,
      cost: cost,
      date: new Date(date)
    }

    // console.log(expenseForm);
    props.formSubmit(expenseForm);
    props.showForm(false);
  }

  const setExpenseTitle = (e)=>  {
    setTitle(e.target.value);
  }

  const setExpenseCost = (e) => {
    setCost(e.target.value);
   }

  const setExpenseDate = (e) => {
    setDate(e.target.value);
  }

  const setShowFormTrue = () => {
    props.showForm(false);
  }

  return (
    <form onSubmit={submitForm}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={title} onChange={setExpenseTitle}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={setExpenseCost} value={cost}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' value={date} onChange={setExpenseDate}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
        <button onClick={setShowFormTrue}> Cancel </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
