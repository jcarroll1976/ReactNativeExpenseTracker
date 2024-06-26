import { useContext, useEffect } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { getExpenses } from "../util/http";

export default function RecentExpenses() {
    const expensesCtx = useContext(ExpensesContext);

    useEffect(() => {
        async function fetchExpenses() {
            const expenses = await getExpenses();
            expensesCtx.setExpenses(expenses);
        }
        fetchExpenses();
    },[])

    const recentExpenses = expensesCtx.expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);

        return expense.date >= date7DaysAgo;
    })

    return (
        <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days" fallbackText="No expenses added in last 7 days." />
    )
}