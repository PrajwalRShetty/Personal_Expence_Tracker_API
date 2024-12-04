const express = require("express");
const router = express.Router();
const {
  generateDailyReport,
  generateWeeklyReport,
  generateMonthlyReport,
} = require("../controllers/reportsController");


router.get("/daily", generateDailyReport); // Generate daily report
router.get("/weekly", generateWeeklyReport); // Generate weekly report
router.get("/monthly", generateMonthlyReport); // Generate monthly report

module.exports = router;
