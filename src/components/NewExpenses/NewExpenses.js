import ExpenseForm from '../Expenses/ExpenseForm';
import './NewExpenses.css';

const NewExpenses = (props) => {
    const enterUser = (userInput) => {
        const expenseData = {
            ...userInput
        }
        props.onAdd(expenseData);
    }
    return <div className='new-expense'>
        <ExpenseForm onSaveData={enterUser} />
    </div>
}

export default NewExpenses;