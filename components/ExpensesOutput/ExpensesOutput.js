import { View } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpenseList from "./ExpenseList";

export default function ExpensesOutput({expenses}) {
    return (
        <View>
            <ExpensesSummary />
            <ExpenseList />
        </View>
    )
}