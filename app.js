const express = require("express");
const app = express();


//Static Resources
app.use(express.static("public"));
//View Engine
app.set("view engine", "ejs");


//Body Parser
app.use(express.urlencoded({ extended: false }));

//Routes
const indexRoutes = require("./routes/index.routes");
app.use(indexRoutes);


module.exports = app;
