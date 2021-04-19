import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {


  const getFormSubmitDetails = (expenseForm) => {

    props.formSubmit(expenseForm);
  }

  return (
    <div className='new-expense'>
      <ExpenseForm formSubmit = {getFormSubmitDetails}/>
    </div>
  );
};

export default NewExpense;
