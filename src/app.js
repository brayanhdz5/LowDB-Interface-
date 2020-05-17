const express = require('express');
const morgan = require('morgan');

const app = express();

// Main Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routers
const { users_router } = require('./api/routers'); // Note: use destructuring for bring all routers

app.use('/api/v1', users_router )





module.exports = app;