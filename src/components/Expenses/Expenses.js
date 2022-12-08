import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card.js'
import './Expenses.css'
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter'
import ExpensesChart from './ExpensesChart'
export default function Expenses(props) {
  const [filteredValue,setFilteredValue] =useState("Select Year")
  const yearFilterChangedHandler = (selectedyear) =>{
    setFilteredValue(selectedyear)
  }

  const filterdData = props.item.filter(item =>{
    return item.date.getFullYear().toString()=== filteredValue
  })
  return (
    <Card className='expenses'>
      <ExpenseFilter onChangeFilter ={yearFilterChangedHandler} initialValue={filteredValue}></ExpenseFilter>
      <ExpensesChart expenes ={filterdData}></ExpensesChart>
    {filterdData.length === 0 ? (<p className='message'>No Date Found</p>) : (filterdData.map((expenseOnItem) => {
        return(
        <ExpenseItem key={expenseOnItem.id} title={expenseOnItem.title} amount ={expenseOnItem.amount} date={expenseOnItem.date}/>
      )}))} 
    </Card>
  )
}
