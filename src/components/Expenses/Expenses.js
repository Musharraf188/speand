import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
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
    {props.items.map(expense => (
      <ExpenseItem
        key={expense.id}
        title={expense.tile}
        amount={expense.amount}
        date={expense.date}
      />
    )

    )}
  </Card>
}

export default Expenses;