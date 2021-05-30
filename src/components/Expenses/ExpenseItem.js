import { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(data) {

  const [title, setTitle] = useState(data.title);

  const clickHandler = () => {
    setTitle('Updated title!');
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={data.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${data.price}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;