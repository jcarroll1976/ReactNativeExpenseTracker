import { View } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpenseList from "./ExpenseList";

export default function ExpensesOutput({expenses,expensesPeriod}) {
    return (
        <View>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
            <ExpenseList />
        </View>
    )
}