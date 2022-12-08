import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
export default function NewExpense(props) {
  const [addExpense,setAddExpense] = useState(false)
    const newExpenseDateHandler = (enteredExpensesData) =>{
        // console.log(enteredExpensesData);
      
const expenseData ={
    ...enteredExpensesData,
    id: Math.random().toString(),
    }
    props.onAddExpenses(expenseData);
    setAddExpense(false)
    }
    const addExpenseButtonHandler = () => {
      setAddExpense(true)
    }
    const addCancleButtonHandler =() => {
      setAddExpense(false)
    }
  return (
    <div className='new-expense'>
     {!addExpense && <button onClick={addExpenseButtonHandler}>Add Expense</button>}
       {addExpense && <ExpenseForm saveTheExpenseData = {newExpenseDateHandler} onCancle = {addCancleButtonHandler}></ExpenseForm>}
    </div>
  )
}
