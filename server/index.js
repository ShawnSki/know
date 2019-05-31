require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const authie_ctrl = require('./controllers/authie_ctrl');
const app = express();
const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;

app.use(express.json())
app.use(
    session({
        secret: SESSION_SECRET,
        saveUninitialized: false,
        resave: false,
        cookie: {
            maxAge: 1000 * 60 * 60
        }
    })
)

// connecting server to database
massive(CONNECTION_STRING).then((database) => {
    app.set('db', database)
    app.listen(SERVER_PORT, () => console.log(`🤙 Surfs up on server port: ${SERVER_PORT}`))
})

// endpoints
app.post('/auth/register', authie_ctrl.register);
app.post('/auth/login', authie_ctrl.login);
app.get('/auth/dashboard', authie_ctrl.accessDashboard);