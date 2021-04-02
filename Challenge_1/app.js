require('dotenv').config()

const express = require('express'),
  app = express(),
  cors = require('cors'),
  morgan = require('morgan'),
  mongoose = require('mongoose'),
  { finalError } = require('./helper/errorHandler'),
  router = require('./routes');



app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors());
app.use(morgan('dev'))

//Mongo Atlas/Mlab Configuration
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB Connection Error"));
db.once("open", () => console.log("MongoDB Connected!"));

app.use('/api', router)


//Error Handler
finalError.forEach(handler => app.use(handler));

module.exports = app

