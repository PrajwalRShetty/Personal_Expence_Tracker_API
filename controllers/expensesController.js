const expenses = []; 
let idCounter = 1;

// Add an expense
exports.addExpense = (req, res) => {
  const { category, amount, date } = req.body;

  if (!category || amount <= 0) {
    return res.status(400).json({ status: "error", message: "Invalid data" });
  }

  const expense = { id: idCounter++, category, amount, date };
  expenses.push(expense);

  res.json({ status: "success", data: expense });
};

// Get all expenses
exports.getExpenses = (req, res) => {
  res.json({ status: "success", data: expenses });
};

// Delete an expense
exports.deleteExpense = (req, res) => {
  const { id } = req.params;
  const index = expenses.findIndex(expense => expense.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ status: "error", message: "Expense not found" });
  }

  const deletedExpense = expenses.splice(index, 1);
  res.json({ status: "success", data: deletedExpense });
};
