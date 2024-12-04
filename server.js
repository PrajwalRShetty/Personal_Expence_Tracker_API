const express=require("express");
const bodyParser=require("body-parser");
const cron=require("node-cron");

const app=express();

const expensesRoutes=require("./routes/expensesRoutes");
const analysisRoutes=require("./routes/analysisRoutes");
const reportsRoutes=require("./routes/reportsRoutes");

const { generateWeeklyReport } = require("./controllers/reportsController");

const PORT=3000;

app.use(express.json());
app.use(bodyParser.json());

app.get('/', (req,res) => {res.status(200).send('WELCOME')});

app.use("/api/expenses",expensesRoutes);
app.use("/api/analysis", analysisRoutes);
app.use("/api/reports", reportsRoutes);


cron.schedule("* * * * *", () => {
    console.log("Scheduled: Daily expense report generation...");
    generateDailyReport(null, {
      json: (response) => console.log("Daily Report:", response),
    });
});

app.listen(PORT,()=>{
    console.log("server started");
});