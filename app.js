const PORT = process.env.PORT || 7000;
const express =  require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");
const logger = require("morgan");

// configutong express
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


// setting up morgan
app.use(logger("dev"));


// configuring view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// routings 
// default Routes
const defaultRoutes = require("./routes/default.routes");

// initializing routes
app.use("/", defaultRoutes);


app.listen(PORT, () => {
    console.log(`Server is listening at %port ${PORT} && %env ${app.settings.env}`);
})