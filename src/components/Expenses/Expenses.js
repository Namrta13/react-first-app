/** Expense Filter is a controlled component as value and change sto value handled in parent
 */

import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState('2020');

    const saveExpensesFilter = (filterValue) => {
        setFilterYear(filterValue);
    }
    return (
        <div>
            <ExpensesFilter onSaveExpensesFilter={saveExpensesFilter} selected={filterYear}/>
            <Card className="expenses">
                <ExpenseItem 
                    title={props.expense[0].title}
                    amount={props.expense[0].amount}
                    date={props.expense[0].date}></ExpenseItem>
                <ExpenseItem 
                    title={props.expense[1].title}
                    amount={props.expense[1].amount}
                    date={props.expense[1].date}></ExpenseItem>
                <ExpenseItem 
                    title={props.expense[2].title}
                    amount={props.expense[2].amount}
                    date={props.expense[2].date}></ExpenseItem>
                <ExpenseItem 
                    title={props.expense[3].title}
                    amount={props.expense[3].amount}
                    date={props.expense[3].date}></ExpenseItem>
            </Card>
        </div>
    );
}

export default Expenses;