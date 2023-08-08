const connectToMongo = require('./db');
const express = require('express')

connectToMongo();
const app = express();
const port = 5000;

// Available Routes
app.use('/api/fetch', require('./routes/fetch'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})