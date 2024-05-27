import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        description: "A pair of shoes",
        amount: 59.99,
        date: new Date("2023-04-17")
    },
    {
        id: "e2",
        description: "A pair of jeans",
        amount: 29.99,
        date: new Date("2023-04-18")
    },
    {
        id: "e3",
        description: "A video game",
        amount: 59.99,
        date: new Date("2023-04-20")
    },
    {
        id: "e4",
        description: "A PS5",
        amount: 499.99,
        date: new Date("2024-02-20")
    },
    {
        id: "e5",
        description: "A Detroit Tigers hat",
        amount: 41.99,
        date: new Date("2023-04-18")
    }
]


export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({description,amount,date}) => {},
    deleteExpense: (id) => {},
    updateExpense: (id,{description,amount,date}) => {}
});

function expensesReducer(state,action) {
    switch(action.type) {
        case "ADD":
            const id = new Date().toString + Math.random().toString();
            return [{...action.payload, id: id}, ...state]
        case "DELETE":
            return state.filter((expense) => expense.id !== action.payload);
        case "UPDATE":
            const updateableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
            const updateableExpense = state[updateableExpenseIndex];
            const updatedItem = {...updateableExpense, ...action.payload.data};
            const updatedExpenses = [...state];
            updatedExpenses[updateableExpenseIndex] = updatedItem;
            return updatedExpenses;
        default:
            return state;
    }
}

export default function ExpensesContextProvider({children}) {
    const [expensesState, dispatch] = useReducer(expensesReducer,DUMMY_EXPENSES);

    function addExpense(expenseData) {
        dispatch({type: "ADD", payload: expenseData});
    }

    function deleteExpense(id) {
        dispatch({type: "DELETE", payload: id});
    }

    function updateExpense(expenseData) {
        dispatch({type: "UPDATE", payload: {id: id, data: expenseData}});
    }

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense
    };

    return (
        <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
    )
}