// server.js
const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config()

// Include route files
const usersRoute = require('./Routes/user');
const productsRoute = require('./Routes/product');
//naya part
app.get('/', (req, res) => {
    res.send('<h1>Hello, Express.js Server!</h1>');
});
// Use routes

app.use(cors())

app.use('/api/users', usersRoute);
app.use('/api/products', productsRoute);

const port= process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});