//initializing libraries
var express = require("express");
var helmet = require("helmet");
var port = (process.env.PORT || 8095);
var path = require("path");  //needed to use into differents OS


//preparing the server
var app = express();
app.use(helmet()); //improving security with helmet

app.use("/", express.static(path.join(__dirname, "public"))); //setting folder

//setting up the server
app.listen(port, () => {
    console.log("Server initialized on port " + port);
}).on("error", (e) => {
    console.log("Server can not be started: " + e);
    process.exit(1);
});
console.log("--------------------------------------");