import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [entertedTitle, setEnteredTitle] = useState('');
    const [entertedAmount, setEnteredAmount] = useState('');
    const [entertedDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (e) => {
        // console.log(e.target.value);
        setEnteredTitle(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value,
        // });
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: e.target.value
        //     };
        // });
    };

    const amountChangeHandler = (e) => {
        // console.log(e.target.value);
        setEnteredAmount(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value,
        // });
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredAmount: e.target.value
        //     };
        // });
    };

    const dateChangeHandler = (e) => {
        // console.log(e.target.value);
        setEnteredDate(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value,
        // });
        /** If sate update depends on prev state use function to do so, so that react combine all prev state */
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredDate: e.target.value
        //     };
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: entertedTitle,
            amount: +entertedAmount,
            date: new Date(entertedDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        props.onClickHandler();
    };

    return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={entertedTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={entertedAmount} onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" value={entertedDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.onClickHandler}>Cancle</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
    );
};

export default ExpenseForm;