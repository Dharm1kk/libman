const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

const dbConfig = require('./config/config.js');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to MongoDB");
})
.catch(err => {
    console.log("Cannot connect to MongoDB", err);
    process.exit(1);
});

app.get('/', (req,res)=>{
    res.json({message: "Welcome to Library Management"});
});

require('./app/routes/routes.js')(app);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
