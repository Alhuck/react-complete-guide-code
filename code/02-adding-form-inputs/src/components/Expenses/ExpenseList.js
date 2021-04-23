import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {

    if(props.items.length === 0) {
        return <h2> No Items Found </h2>
    }

    return (

        <u1>
        { props.items.map(expense => 
            <ExpenseItem 
            key={expense.id}
            title={expense.title}
            amount={expense.cost}
            date={new Date(expense.date)}
            />)
        }
        </u1>
        
    )
 
}

export default ExpenseList;