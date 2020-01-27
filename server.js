const path = require('path')
const express = require('express')
const PORT = 8000;
const bodyParser = require('body-parser')
const db = require('./database/models')
const cors = require('cors') // allows/disallows cross-site communication
const morgan = require('morgan') // logs requests
const app = express()


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Connected')
})

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});

module.exports = app
