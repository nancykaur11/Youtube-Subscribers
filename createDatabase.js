const mongoose = require('mongoose')
const subscriberModel = require('./models/subscribers')
const data = require('./data')

// Connect to DATABASE
const DATABASE_URL = "mongodb://nancy:nancykaur@ac-k7pgmuk-shard-00-00.zxseeik.mongodb.net:27017,ac-k7pgmuk-shard-00-01.zxseeik.mongodb.net:27017,ac-k7pgmuk-shard-00-02.zxseeik.mongodb.net:27017/?replicaSet=atlas-i1ambc-shard-0&ssl=true&authSource=admin";
// const DATABASE_URL = "mongodb://127.0.0.1:27017/subscribers"
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    await subscriberModel.deleteMany({})
    // console.log(connection)
    await subscriberModel.insertMany(data)
    await mongoose.disconnect();
}
refreshAll()