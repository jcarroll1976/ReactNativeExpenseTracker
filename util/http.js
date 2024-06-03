import axios from "axios";

BACKEND_URL = "https://react-native-course-f0b6f-default-rtdb.firebaseio.com"

export function storeExpenses(expenseData) {
    axios.post(BACKEND_URL + '/expenses.json', expenseData);
}

export async function getExpenses() {
    const response = await axios.get(BACKEND_URL + '/expenses.json');

    const expenses = [];
    
    for(const key in response.data) {
        const expenseObject = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description 
        };
        expenses.push(expenseObject);
    }
    return expenses; 
}