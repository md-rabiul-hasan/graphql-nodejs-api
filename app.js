const path        = require('path');
const express     = require('express');
const bodyParser  = require('body-parser');
const graphqlHttp = require('express-graphql');
require('dotenv').config();

const app = express();

// database connection
const connectDB = require("./config/database");
connectDB();

app.listen(3000);