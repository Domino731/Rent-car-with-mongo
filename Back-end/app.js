require('dotenv').config({path: __dirname + '/.env'})
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bodyParser = require('body-parser')
const {MONGO_DB} = require("./mongo");
const userRoute = require("./routes/user");
const crypto = require("crypto");

console.log(crypto.randomBytes(64).toString("hex"))
console.log(crypto.randomBytes(64).toString("hex"))
const port = 8000;
const dbUrl = MONGO_DB;


const app = express();

// middleware
// express public mode
app.use(express.static("public"));
// configure cors
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
// set body parser
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json())
// cookies
app.use(cookieParser())

// mongoDB connection
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("MONGO - success - connect to database")
    })
    .catch(error => console.log(error))

// routes
app.use(userRoute);

// listening on port
app.listen(port, () => {
    console.log("SUCCESS: server started");
});
