export const selectToken = store => store.auth.accessToken;

export const selectRefreshToken = store => store.auth.refreshToken;

export const selectSid = store => store.auth.sid;

export const selectUserId = store => store.auth.userId;

export const selectIsLoggedIn = store => store.auth.isLoggedIn;

export const selectTransactions = store => store.transactions.transactions;

export const selectIncomes = store => store.transactions.incomes;

export const selectExpenses = store => store.transactions.expenses;

export const selectIncomeCategories = store =>
  store.transactions.incomeCategories;

export const selectExpenseCategories = store =>
  store.transactions.expenseCategories;

export const selectBalance = store => store.transactions.balance;

export const selectIsLoading = store => store.transactions.isLoading;
