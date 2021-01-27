const express = require('express');
const app = express();

const routes = require('../routes');

const PORT = process.env.PORT || 5000;

// require db connection
require('../models');

mongoose.connect(
	process.env.DB_CONNECTION,
	{ useNewUrlParser: true },
	() => { console.log('connected to db') ;
  }  );
  

// configure body parser for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

// Bootstrap server
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}.`);
});