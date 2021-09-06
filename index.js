const express = require("express");
const app = express();
const env = require('dotenv')

env.config()

app.use(express.static("public"));

app.use(express.urlencoded({
    extended: false
}))

app.use(express.json())

app.set('view engine', 'ejs')

app.use('/', require('./routes/pages'))
app.use('/action', require('./routes/action'))

const listener = app.listen(process.env.PORT || 8200)
console.log(`App run on port 8200`)