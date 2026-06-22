const express = require("express");
const connectDB = require("./config/db");
const employeeRoutes = require("./routes/employeeRoutes");
const logger = require("./middleware/logger");
const authHandler = require("./middleware/authHandler");


const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");


app.use(logger);  
app.use(authHandler); 
app.use("/", employeeRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});