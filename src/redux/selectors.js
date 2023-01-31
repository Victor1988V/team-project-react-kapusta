//===== AUTH =====

export const selectToken = store => store.auth.accessToken;

export const selectRefreshToken = store => store.auth.refreshToken;

export const selectSid = store => store.auth.sid;

export const selectUserId = store => store.auth.userId;

export const selectUserEmail = store => store.auth.userEmail;

export const selectIsLoggedIn = store => store.auth.isLoggedIn;

export const selectBalanceAuth = store => store.auth.balance;

//===== TRANSACTIONS =====

export const selectIsLoading = store => store.transactions.isLoading;

export const selectTransactions = store => store.transactions.transactions;

export const selectReportsData = store => store.transactions.reportsData;

export const selectIncomes = store => store.transactions.incomes;

export const selectIncomeTotal = store => store.transactions.incomeTotal;

export const selectExpenses = store => store.transactions.expenses;

export const selectExpensesTotal = store => store.transactions.expenseTotal;

export const selectIncomeCategories = store =>
  store.transactions.incomeCategories;

export const selectExpenseCategories = store =>
  store.transactions.expenseCategories;

export const selectBalance = store => store.transactions.balance;

//=================

export const selectDataChart = store => store.reportsQuery.filteredDate;

export const selectReportsQuery = store => store.reportsQuery.reportsQuery;

export const selectIsFetchingCurrentUser = store =>
  store.auth.isFetchingCurrentUser;

export const selectIncomeSummary = store => store.transactions.incomesStats;

export const selectExpensesSummary = store => store.transactions.expensesStats;
//=================
