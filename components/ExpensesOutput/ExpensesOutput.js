import { StyleSheet, View } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpenseList from "./ExpenseList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        description: "A pair of shoes",
        amount: 59.99,
        date: new Date("04-13-2023")
    },
    {
        id: "e2",
        description: "A pair of jeans",
        amount: 29.99,
        date: new Date("04-18-2023")
    },
    {
        id: "e3",
        description: "A video game",
        amount: 59.99,
        date: new Date("04-20-2023")
    },
    {
        id: "e4",
        description: "A PS5",
        amount: 499.99,
        date: new Date("02-20-2024")
    },
    {
        id: "e5",
        description: "A Detroit Tigers hat",
        amount: 41.99,
        date: new Date("04-18-2023")
    }
]

export default function ExpensesOutput({expenses,expensesPeriod}) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
            <ExpenseList expenses={DUMMY_EXPENSES} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700
    }
})