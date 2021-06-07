import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) =>{

    const saveDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsOpen(false);
    };

    const [isOpen, setIsOpen] = useState(false);

    const startHandler = () =>{
        setIsOpen(true);
        console.log(isOpen)
    }

    const stopHandler = () =>{
        setIsOpen(false);
    }

    return(
        <div className="new-expense">
            {!isOpen && <button onClick={startHandler} >Add New Expense</button>}
            {isOpen && <ExpenseForm onStop={stopHandler} onFormData={saveDataHandler} />}
        </div>
    );
};

export default NewExpense;