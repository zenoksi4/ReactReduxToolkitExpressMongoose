const { response } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

// application/json
app.use(express.json())
// application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// images path
app.use("/static", express.static(__dirname + "/assets"))

app.use('/api/items', require('./routes/items'))

mongoose.connect("mongodb://localhost:27017")
    .then(() => {
        app.listen(port, () => {
            console.log(`App listening on port: ${port}`)
        })
    })