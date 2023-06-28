import { useState } from 'react';
import ExpenseForm from '../Expenses/ExpenseForm';
import './NewExpenses.css';

const NewExpenses = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const enterUser = (userInput) => {
        const expenseData = {
            ...userInput
        }
        props.onAdd(expenseData);
    }
    const changeForm=()=>{
        setIsEditing(true);
    }
    const stopHandler =()=>{
        setIsEditing(false)
    }
    return <div className='new-expense'>
        {!isEditing && <button onClick={changeForm}>Add New Expense</button>}
       {isEditing && <ExpenseForm onCancel={stopHandler} onSaveData={enterUser} />}
    </div>
}

export default NewExpenses;