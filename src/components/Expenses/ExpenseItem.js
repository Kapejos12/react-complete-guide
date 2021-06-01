
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(data) {

  //const [title, setTitle] = useState(data.title);
  
  return (    
    <Card className="expense-item">
      <ExpenseDate date={data.date}/>
      <div className="expense-item__description">
        <h2>{data.title}</h2>
        <div className="expense-item__price">${data.price}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;