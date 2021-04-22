import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {


  const getFormSubmitDetails = (expenseForm) => {

    props.formSubmit(expenseForm);
  }

  const setShowFormTrue = (status) => {
    props.showForm(status);
  } 

  return (
    <div className='new-expense'>
      <ExpenseForm showForm = {setShowFormTrue} formSubmit = {getFormSubmitDetails}/>
    </div>
  );
};

export default NewExpense;
