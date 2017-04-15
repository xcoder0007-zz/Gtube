const express = require('express');
const firebase = require("firebase");
const fs = require('fs');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 8080;
const app = express();

// Save the latest response of Filestack API



const Config = require('./db/firebase.json').db; // require firebase DB


let FinitializeApp = firebase.initializeApp(Config); // initialize Firebase App & assign to let FinitializeApp


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

// Enable CORS for development
app.use(cors());

// Static files
app.use(express.static(`${__dirname}/dist`));

// Log HTTP requests in the terminal
app.use(morgan('tiny'));



app.listen(port, () => console.log(`Server is running on ${port}!`));