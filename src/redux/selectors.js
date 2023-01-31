export const selectToken = store => store.auth.accessToken;

export const selectRefreshToken = store => store.auth.refreshToken;

export const selectSid = store => store.auth.sid;

export const selectUserId = store => store.auth.userId;

export const selectUserEmail = store => store.auth.userEmail;

export const selectIsLoggedIn = store => store.auth.isLoggedIn;

export const selectTransactions = store => store.transactions.transactions;

export const selectIncomes = store => store.transactions.incomes;

export const selectExpenses = store => store.transactions.expenses;

export const selectIncomeCategories = store =>
  store.transactions.incomeCategories;

export const selectExpenseCategories = store =>
  store.transactions.expenseCategories;

export const selectBalance = store => store.transactions.balance;

export const selectReports = store => store.reports;

export const selectIsLoading = store => store.transactions.isLoading;

export const selectDataChart = store => store.reportsQuery.filteredDate;

export const selectReportsQuery = store => store.reportsQuery.reportsQuery;

export const selectIncomeTotal = store =>
  store.reports.reports.incomes.incomeData.Total;

export const selectExpensesTotal = store =>
  store.reports.reports.expenses.expenseTotal;
export const selectIsFetchingCurrentUser = store =>
  store.auth.isFetchingCurrentUser;

export const selectIncomeSummary = store => store.transactions.incomesStats;

export const selectExpensesSummary = store => store.transactions.expensesStats;
