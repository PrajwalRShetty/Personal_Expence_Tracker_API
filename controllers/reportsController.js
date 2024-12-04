const expenses = require("./expensesController").expenses;

// Generate daily report
exports.generateDailyReport = (req, res) => {
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  const dailyExpenses = expenses.filter(expense => expense.date === today);

  res.json({ status: "success", data: dailyExpenses });
};

// Generate weekly report
exports.generateWeeklyReport = (req, res) => {
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  const weeklyExpenses = expenses.filter(
    expense => new Date(expense.date) >= oneWeekAgo
  );

  res.json({ status: "success", data: weeklyExpenses });
};

// Generate monthly report
exports.generateMonthlyReport = (req, res) => {
  const currentMonth = new Date().toISOString().slice(0, 7); // YYYY-MM
  const monthlyExpenses = expenses.filter(expense => expense.date.startsWith(currentMonth));

  res.json({ status: "success", data: monthlyExpenses });
};
