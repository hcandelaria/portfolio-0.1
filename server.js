const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const port = process.env.PORT || 8000 ;
const app = express();
const routes = require("./routes/html-routes.js");


app.use('/', express.static(path.join(__dirname, 'public')));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// log all requests to server
app.use(morgan('tiny'));

app.use("/", routes);

// listens for requests
app.listen(port, function() {
    console.log("Listening on PORT " + port);
});
