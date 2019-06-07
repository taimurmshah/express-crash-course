const moment = require("moment");

//middleware;
//this runs whenever a request is made.
const logger = (req, res, next) => {
  console.log("in the middleware");
  console.log(
    "req.protocol:",
    `${req.protocol}://${req.get("host")}${
      req.originalUrl
    }: ${moment().format()}`
  );
  //what does next do?
  next();
};

module.exports = logger;
