const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Import and use routers
const router = require('./routes/routes');

// Use Routers
app.use("/", router);

app.listen(7000, () => {
    console.log('Server running on localhost:7000');
});
