console.log("helloooo worldo")
const express = require('express')
const app = require('./app')
const mongoose = require('mongoose')
const port = 3000

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE
const DATABASE_URL = "mongodb://nancy:nancykaur@ac-k7pgmuk-shard-00-00.zxseeik.mongodb.net:27017,ac-k7pgmuk-shard-00-01.zxseeik.mongodb.net:27017,ac-k7pgmuk-shard-00-02.zxseeik.mongodb.net:27017/?replicaSet=atlas-i1ambc-shard-0&ssl=true&authSource=admin";
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log("errrrrrr"))
db.once('open', () => console.log('connected to database'))

// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`))