import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) =>{

    const [filteredYear, setFilteredYear] = useState('2021');

    const getFilterData = (selectedYear) =>{
        setFilteredYear(selectedYear);
    }

    return(        
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onGetFilter={getFilterData} />
            {props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear).map(expense => 
                <ExpenseItem 
                    key={expense.id} 
                    title={expense.title} 
                    price={expense.price} 
                    date={expense.date} /> 
            )}
        </Card>
    );
}

export default Expenses;