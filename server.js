const express     = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser  = require('body-parser');
const config      = require('./config');
const path        = require('path');

const app = express();
const port = config.port;

app.use(express.static(path.resolve(__dirname, "client", "build")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
});

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(config.db, (err, database) => {
  if (err) return console.log(err)
  
  database_name = database.db("spokes_db")
  require('./index')(app, database_name);

  app.listen(port, () => {
    console.log('Live on port ' + port);
  });
})