require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const authie_ctrl = require('./controllers/authie_ctrl');
const quizzie_ctrl = require('./controllers/quizzie_ctrl');
const users_ctrl = require('./controllers/users_ctrl');
const results_ctrl = require('./controllers/results_ctrl');
const app = express();
const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;

app.use(express.json())
app.use( express.static( `${__dirname}/../build` ) );
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
app.get('/auth/admin', authie_ctrl.getAdmin);
app.get('/auth/logout', authie_ctrl.logout);

app.post('/api/quiz', quizzie_ctrl.addQuiz);
app.get('/api/quizzes/:id', quizzie_ctrl.allQuizzesByID);
app.delete('/api/quiz/:id', quizzie_ctrl.deleteQuiz);
app.get('/api/quiz/:id', quizzie_ctrl.getQuiz);
app.put('/api/quiz/:id', quizzie_ctrl.editQuiz);
app.get('/api/quizzes', quizzie_ctrl.allQuizzes);

app.post('/api/question', quizzie_ctrl.addQuestion);
app.delete('/api/question/:id', quizzie_ctrl.deleteQuestion);
app.get('/api/questions/:id', quizzie_ctrl.allQuestions);
app.put('/api/question/:id', quizzie_ctrl.editQuestion);
app.get('/api/question/:id', quizzie_ctrl.getQuestion);

app.post('/api/user', users_ctrl.addUser);
app.put('/api/user/:id', users_ctrl.editUser);

app.get('/results/quiz/:id', results_ctrl.getQuizResults);
app.get('/results/admin/:id', results_ctrl.getResultsAdmin);