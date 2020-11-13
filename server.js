
const routes = require("./routes");
const express  = require('express'), app = express(), mongoose = require('mongoose');
require('dotenv').config(); // configures dotenv
app.use(express.json());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// MongoDB connection with ATLAS and Mongoose
// connects to the value within the .env file
const uri = process.env.ATLAS_URI;
// connects mongoose to the uri and sets some mongoose keys to true to combat mongoose's deprecation warnings
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
// make sure that MongoDB connected successfully
connection.once('open', () => {
console.log("MongoDB database connected!!");
});
app.listen(3000, process.env.IP, () => {
console.log("Server Started!");
});



