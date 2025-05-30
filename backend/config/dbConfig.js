const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/my-portfolio', {
    useNewUrlParser:true,
    useUnifiedTopology: true,  
})

const connection = mongoose.connection;

connection.on("error",()=>{
    console.log("error connecting to database");
});

connection.on("connected",()=>{
    console.log("Connected to database");
});

module.exports = mongoose;

