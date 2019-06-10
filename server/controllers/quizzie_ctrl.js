
module.exports = {
    // creates new quiz
    addQuiz: (req, res) => {
        // console.log('hit addQuiz')
        const { admins_id, quiz_title, quiz_intro, quiz_bg_img, quiz_survey1, survey1_options } = req.body;
        req.app.get('db').create_quiz({
            admins_id,
            quiz_title,
            quiz_intro,
            quiz_bg_img,
            quiz_survey1,
            survey1_options,
        }).then(newQuiz => {
            res.status(200).send(newQuiz)
            // console.log(newQuiz)
        })
    },
    // this will get all quizzes from the db
    allQuizzesByID: (req, res) => {
        const { id } = req.params;
        const db = req.app.get('db');
        db.get_all_quizzes_byID({ id })
            .then(quizzes => {
                res.status(200).send(quizzes)
            })
    },

    getQuiz: (req, res) => {
        // console.log(req.params)
        const { id } = req.params;
        const db = req.app.get('db');
        db.get_quiz({ id })
            .then(quiz => {
                res.status(200).send(quiz)
            })
    },

    allQuizzes: (req, res) => {
        const db = req.app.get('db');
        db.get_all_quizzes()
            .then(quizzes => {
            res.status(200).send(quizzes)
        })
    },

    addQuestion: (req, res) => {
        const { quizzes_id, question, remediation, answer, distractor1, distractor2, distractor3 } = req.body;
        req.app.get('db').create_question({
            quizzes_id,
            question,
            remediation,
            answer,
            distractor1,
            distractor2,
            distractor3
        }).then(newQuestion => {
            res.status(200).send(newQuestion)
        })
    },

    deleteQuiz: (req, res) => {
        const { id } = req.params;
        const db = req.app.get('db');
        db.delete_quiz({ id })
            .then(res.sendStatus(200))
    },

    editQuiz: (req, res) => {
        const { id } = req.params;
        const { quiz_title, quiz_intro, quiz_bg_img, quiz_survey1, survey1_options } = req.body;
        const db = req.app.get('db');
        db.edit_quiz({ id, quiz_title, quiz_intro, quiz_bg_img, quiz_survey1, survey1_options })
            .then(updatedQuiz => {
                res.status(200).send(updatedQuiz)
            })
    },
    // this will get all questions from the db
    allQuestions: (req, res) => {
        const { id } = req.params;
        const db = req.app.get('db');
        db.get_all_questions({ id })
            .then(questions => {
                res.status(200).send(questions)
            })
    },

    deleteQuestion: (req, res) => {
        const { id } = req.params;
        const db = req.app.get('db');
        db.delete_question({ id })
            .then(res.sendStatus(200))
    },
    
    editQuestion: (req, res) => {
        const { id } = req.params;
        const { question, remediation, answer, distractor1, distractor2, distractor3 } = req.body;
        const db = req.app.get('db');
        db.edit_question({ id, question, remediation, answer, distractor1, distractor2, distractor3 })
            .then(updatedQuestion => {
            res.status(200).send(updatedQuestion)
        })
    },

    getQuestion: (req, res) => {
        const { id } = req.params;
        const db = req.app.get('db');
        db.get_question({ id })
            .then(question => {
                res.status(200).send(question)
            })
    },
}