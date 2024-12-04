const expenses = require("./expensesController").expenses;


exports.highestSpendingCategory = (req, res) => {
  const categoryTotals = {};

  expenses.forEach(({ category, amount }) => {
    categoryTotals[category] = (categoryTotals[category] || 0) + amount;
  });

  const highestCategory = Object.keys(categoryTotals).reduce((a, b) =>
    categoryTotals[a] > categoryTotals[b] ? a : b
  );

  res.json({
    status: "success",
    data: {
      highestCategory,
      total: categoryTotals[highestCategory],
    },
  });
};


exports.monthlyTotals = (req, res) => {
  const monthlyTotals = {};

  expenses.forEach(({ date, amount }) => {
    const month = date.slice(0, 7); // Extract YYYY-MM
    monthlyTotals[month] = (monthlyTotals[month] || 0) + amount;
  });

  res.json({ status: "success", data: monthlyTotals });
};
