import { createSlice } from '@reduxjs/toolkit';
import { getAllUserInfo, logIn } from 'services/authAPI';
import * as transactionsAPI from 'services/transactionsAPI';

import { setAccessToken } from 'services/authSlice';

const initialState = {
  transactions: [],
  reportsData: [],
  incomes: [],
  incomeTotal: 0,
  incomesStats: {},
  expenses: [],
  expenseTotal: 0,
  expensesStats: {},
  incomeCategories: [],
  expenseCategories: [],
  balance: 0,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload.message;

  if (action.payload.code === 401) {
    console.log('transSlice', action.payload);
    setAccessToken('');
  }
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(transactionsAPI.addIncome.pending, handlePending)
      .addCase(transactionsAPI.addIncome.fulfilled, (state, action) => {
        state.balance = action.payload.newBalance;
        state.incomes.push(action.payload.transaction);
        state.transactions.push(action.payload.transaction);
      })
      .addCase(transactionsAPI.addIncome.rejected, handleRejected)

      .addCase(transactionsAPI.getIncome.pending, handlePending)
      .addCase(transactionsAPI.getIncome.fulfilled, (state, action) => {
        state.incomes = action.payload.incomes;
        state.incomesStats = action.payload.monthsStats;
      })
      .addCase(transactionsAPI.getIncome.rejected, handleRejected)

      .addCase(transactionsAPI.addExpense.pending, handlePending)
      .addCase(transactionsAPI.addExpense.fulfilled, (state, action) => {
        state.balance = action.payload.newBalance;
        state.expenses.push(action.payload.transaction);
        state.transactions.push(action.payload.transaction);
        // state.isLoading = false;
      })
      .addCase(transactionsAPI.addExpense.rejected, handleRejected)

      .addCase(transactionsAPI.getExpense.pending, handlePending)
      .addCase(transactionsAPI.getExpense.fulfilled, (state, action) => {
        state.expenses = action.payload.expenses;
        state.expensesStats = action.payload.monthsStats;
      })
      .addCase(transactionsAPI.getExpense.rejected, handleRejected)

      .addCase(transactionsAPI.deleteTransaction.pending, handlePending)
      .addCase(transactionsAPI.deleteTransaction.fulfilled, (state, action) => {
        state.balance = action.payload.newBalance;
        let index = state.incomes.findIndex(
          transaction => transaction._id === action.meta.arg
        );
        if (index === -1) {
          index = state.expenses.findIndex(
            transaction => transaction._id === action.meta.arg
          );
          state.expenses.splice(index, 1);
        } else {
          state.incomes.splice(index, 1);
        }
      })
      .addCase(transactionsAPI.deleteTransaction.rejected, handleRejected)

      .addCase(transactionsAPI.getIncomeCategories.pending, handlePending)
      .addCase(
        transactionsAPI.getIncomeCategories.fulfilled,
        (state, action) => {
          state.incomeCategories = action.payload;
        }
      )
      .addCase(transactionsAPI.getIncomeCategories.rejected, handleRejected)

      .addCase(transactionsAPI.getExpenseCategories.pending, handlePending)
      .addCase(
        transactionsAPI.getExpenseCategories.fulfilled,
        (state, action) => {
          state.expenseCategories = action.payload;
        }
      )
      .addCase(transactionsAPI.getExpenseCategories.rejected, handleRejected)

      .addCase(transactionsAPI.getTransactionsByDate.pending, handlePending)
      .addCase(
        transactionsAPI.getTransactionsByDate.fulfilled,
        (state, action) => {
          state.reportsData = action.payload;
          state.incomes = action.payload.incomes;
          state.incomeTotal = action.payload.incomes.incomeTotal;
          state.expenses = action.payload.expenses;
          state.expenseTotal = action.payload.expenses.expenseTotal;
        }
      )
      .addCase(transactionsAPI.getTransactionsByDate.rejected, handleRejected)

      .addCase(getAllUserInfo.pending, handlePending)
      .addCase(getAllUserInfo.fulfilled, (state, action) => {
        state.balance = action.payload.balance;
      })
      .addCase(getAllUserInfo.rejected, handleRejected)

      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, action) => {
        state.balance = action.payload.userData.balance;
      })
      .addCase(logIn.rejected, handleRejected)

      .addCase(transactionsAPI.updateBalance.pending, handlePending)
      .addCase(transactionsAPI.updateBalance.fulfilled, (state, action) => {
        state.balance = action.payload.newBalance;
      })
      .addCase(transactionsAPI.updateBalance.rejected, handleRejected);
  },
});

export default transactionsSlice.reducer;
