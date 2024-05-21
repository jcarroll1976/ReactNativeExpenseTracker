import { FlatList, Text } from "react-native";

function renderExpenseItem(itemData) {
    return (
        <Text>{itemData.item.description}</Text>
    )
}

export default function ExpenseList({expenses}) {
    return (
        <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item) => item.id} />
    )
}