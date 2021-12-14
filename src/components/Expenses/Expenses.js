/** Expense Filter is a controlled component as value and change sto value handled in parent
 */

import { useState } from "react";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState('2020');

    const saveExpensesFilter = (filterValue) => {
        setFilterYear(filterValue);
    }

    const filteredExpense = props.expense.filter(exp => {
        return exp.date.getFullYear().toString() === filterYear;
    });

    

    return (
        <Card className="expenses">
            <ExpensesFilter onSaveExpensesFilter={saveExpensesFilter} selected={filterYear}/>
            {/* Different Ways 
            {filteredExpense.length === 0 ? <p>No Expenses Found</p> : filteredExpense.map(exp => 
                <ExpenseItem 
                    key={exp.id}
                    title={exp.title}
                    amount={exp.amount}
                    date={exp.date}/>
                )} */}
            {/* {filteredExpense.length === 0 && <p>No Expenses Found</p>}
            {filteredExpense.length > 0 && filteredExpense.map(exp => 
                <ExpenseItem 
                    key={exp.id}
                    title={exp.title}
                    amount={exp.amount}
                    date={exp.date}/>
                )
                } */}
                {/* {expenseContent} */}
                <ExpensesChart expenses={filteredExpense}/>
                <ExpensesList items={filteredExpense}/>
        </Card>
    );
}

export default Expenses;