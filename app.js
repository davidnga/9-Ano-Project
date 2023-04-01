const express = require("express");
const bodyParser = require("body-parser");
const app = express();


const ejs = require("ejs");


app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log(`Server is running on port ${3000}`);
});



app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render(__dirname + "/index.ejs");

});

