import axios from "axios";

export function storeExpenses(expenseData) {
    axios.post('https://react-native-course-f0b6f-default-rtdb.firebaseio.com/expenses.json', expenseData);
}