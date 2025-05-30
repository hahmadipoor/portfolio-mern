const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig= require("./config/dbConfig");
const portFolioRoute=require("./routes/portfolioRoute")

app.use(express.json());

app.use("/api/portfolio",portFolioRoute);

const port =process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`server listening on port ${port}`);
})