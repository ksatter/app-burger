//Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// Set up Server
const PORT = process.env.PORT || 3030;
const app = express()

//Serve static content from public folder
app.use(express.static("public"));

//Use body parser to create object for api
app.use(bodyParser.urlencoded({extended: true}));

//Set up handlebars
const exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars")

//Access routes
const routes = require('./controllers/burgers_controller.js');
app.use("/", routes)

//Start Server
app.listen(PORT, function() {
  console.log("Listening on PORT " + PORT);
});
