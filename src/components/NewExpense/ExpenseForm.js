import React, { useState } from 'react'
import './ExpenseForm.css'
export default function ExpenseForm(props) {
    console.log("prop received", props);
    const [enteredTitle, setEnteredTitle]=useState('');
    const [enteredAmount, setEnteredAmount]=useState('');
    const [enteredDate, setEnteredDate]=useState('');

const titleChangedHandler = (event) => {
    setEnteredTitle(event.target.value)
}
const amountChangedHandler = (event) => {
    setEnteredAmount(event.target.value)
}
const dateChangedHandler = (event) => {
    setEnteredDate(event.target.value)
}
const submitHandler = (event) =>{
    event.preventDefault();
    const expensesData = {
    title: enteredTitle,
    date: new Date(enteredDate),
    amount: enteredAmount
}
props.saveTheExpenseData(expensesData);
setEnteredTitle('')
setEnteredDate('')
setEnteredAmount('')
}
  return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enteredTitle} onInput={titleChangedHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' value={enteredAmount} onInput={amountChangedHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onInput={dateChangedHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
        <button type='Cancle' onClick ={props.onCancle}>Cancle</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
}
