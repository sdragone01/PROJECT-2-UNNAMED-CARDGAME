var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/movies_codealong', {
  // useNewUrlParser: true,
  // useCreateIndex: true,
  // useUnifiedTopology: true
});

// shortcut to mongoose.connection object
var db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});