const express = require("express");
const router = express.Router();
const { highestSpendingCategory, monthlyTotals } = require("../controllers/analysisController");


router.get("/highest-category", highestSpendingCategory); 
router.get("/monthly-totals", monthlyTotals); 

module.exports = router;
