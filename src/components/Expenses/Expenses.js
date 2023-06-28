import './Expenses.css';

import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpenseList from './ExpenseList';
const Expenses = (props) => {
  const [filteryear, setFilterYear] = useState('2022');
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
    console.log(filteryear)
  }
  const filterExpense = props.items.filter((expense => {
    return expense.date.getFullYear().toString() === filteryear;
  }))

  return <Card className='expenses'>
    <ExpenseFilter onChangeFilter={filterChangeHandler} />
    <ExpenseList items={filterExpense}/>
  </Card>

}

export default Expenses;