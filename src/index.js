const cors = require('cors')
var cron = require('node-cron')
const express = require('express')
const { connect } = require('mongoose')
require('dotenv').config()

const routes = require('./routes')
const { match } = require('./controllers/matchingController')

const app = express()

app.use(express.json())

try {
  connect(process.env.DATABASE_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
} catch (error) {
  console.log("erro");
}

app.use(routes)
app.use(cors({ "origin": "*" }))

cron.schedule('0 */1 * * * *', () => match());

app.listen(process.env.PORT)