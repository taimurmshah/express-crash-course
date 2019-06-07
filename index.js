const express = require("express");
const path = require("path");

const logger = require("./middleware/logger");

//i think this line creates the server
const app = express();

//Init middleware -- middleware, in express, are just functions that get called after
//a request is sent.
//app.use(logger);

//Body Parser middleware
app.use(express.json());
//handle url encoded data (form submissions
app.use(express.urlencoded({ extended: false }));

//Set static folder
//basically, creating routes that I can
//type on the browser and go to;
//localhost:5000/about.html, etc.
app.use(express.static(path.join(__dirname, "public")));

//members api routes, requires express router
//line below points to a file that contains basically
//my controller.
app.use("/api/members", require("./routes/api/members"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
