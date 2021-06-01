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

    const filteredData = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return(        
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onGetFilter={getFilterData} />
            {filteredData.length === 0 && <h3>No expenses found.</h3> }
            {filteredData.length > 0 && 
            filteredData.map(expense => 
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