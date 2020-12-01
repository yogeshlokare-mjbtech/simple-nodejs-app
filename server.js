var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Node JS REST API application.",
    date: new Date().toLocaleString()
  });
});

//require("./app/routes/customer.routes.js")(app);

// set port, listen for requests
app.listen(5000, () => {
  console.log("Server is running on port 5000.");
});

const customers = require("./src/controllers/customer.controller");
// Create a new Customer
app.post("/customers", customers.create);

// Retrieve all Customers
app.get("/customers", customers.findAll);

// Retrieve a single Customer with customerId
app.get("/customers/:customerId", customers.findOne);

// Update a Customer with customerId
app.put("/customers/:customerId", customers.update);

// Delete a Customer with customerId
app.delete("/customers/:customerId", customers.delete);

// Create a new Customer
app.delete("/customers", customers.deleteAll);

module.exports = app;
