import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [addNewExpense, setAddNewExpense] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    const onClickHandler = () => {
        setAddNewExpense(!addNewExpense);
    }
    return (
       <div className="new-expense">
           {!addNewExpense && <button onClick={onClickHandler}>Add New Expense</button>}
           {addNewExpense && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onClickHandler={onClickHandler}/>}
       </div>
    );
};

export default NewExpense;