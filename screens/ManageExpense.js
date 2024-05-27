import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";

export default function ManageExpense({route, navigation}) {
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add Expense"
        })
    },[navigation,isEditing]);
    
    function deleteExpenseHandler() {

    }

    const cancelHandler = () => {

    }

    const confirmHandler = () => {

    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button mode = "flat"onPress={cancelHandler}>Cancel</Button>
                <Button onPress={confirmHandler}>{isEditing ? "Update" : "Add"}</Button>
            </View>
            {isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton icon="trash" color={GlobalStyles.colors.error500} size={36} onPress={deleteExpenseHandler} />
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    buttonContainer: {
        flexDirection: "row"
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: "center"
    }
})