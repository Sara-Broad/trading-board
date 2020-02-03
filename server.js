const path = require('path')
const express = require('express')
const PORT = 8000;
const bodyParser = require('body-parser')
const db = require('./database/models')
const cors = require('cors') // allows/disallows cross-site communication
const morgan = require('morgan') // logs requests
// const session = require("express-session");
const passport = require("./database/config/passport");
const app = express()

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(logger('dev'));
// app.use(passport.initialize());
// app.use(passport.session());
//
// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

app.get('/', (req, res) => {
    res.send('Connected')
})

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});

module.exports = app
