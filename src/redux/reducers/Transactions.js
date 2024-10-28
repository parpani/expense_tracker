import {createSlice, createSelector} from '@reduxjs/toolkit';

const initialState = {
    transactions: [], //list of all transactions
    balance: 0,
};

export const Transactions = createSlice({
  name: 'transactions',
  initialState: initialState,
  reducers: {
    resetToInitialState: () => { 
      return initialState;
    },
    addTransaction: (state, action) => {
      console.log("state", state)
      console.log("action", action)
      const { type, amount } = action.payload;
      state.transactions.push(action.payload); 
        state.balance += type === 'income' ? amount : -amount;
      console.log("balance", state.balance)
    },
    
  }
});

// Selectors for transactions by day, month, and year
export const selectTransactionsByDay = createSelector(
  [(state) => state.transactions.transactions],
  (transactions) =>
    transactions.filter((t) => 
      new Date(t.date).toDateString() === new Date().toDateString()
    )
);

export const selectTransactionsByMonth = createSelector(
  [(state) => state.transactions.transactions],
  (transactions) =>
    transactions.filter(
      (t) => new Date(t.date).getMonth() === new Date().getMonth()
    )
);

export const selectTransactionsByYear = createSelector(
  [(state) => state.transactions.transactions],
  (transactions) =>
    transactions.filter(
      (t) => new Date(t.date).getFullYear() === new Date().getFullYear()
    )
);


export const {resetToInitialState, addTransaction} = Transactions.actions;
export default Transactions.reducer;