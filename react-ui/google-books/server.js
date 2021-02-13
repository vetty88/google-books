const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./server/routes");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(cors());
// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://vetty88:fXP1EMS6Ww0nANsY@cluster0.0kcvg.mongodb.net/googlebooks?authSource=googlebooks&w=1",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});