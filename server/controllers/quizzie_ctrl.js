
module.exports = {
    // creates new quiz
    addQuiz: (req, res) => {
        // console.log('hit addQuiz')
        const { admins_id, quiz_title, quiz_intro, quiz_bg_img } = req.body;
        req.app.get('db').create_quiz({
            admins_id,
            quiz_title,
            quiz_intro,
            quiz_bg_img
        }).then(newQuiz => {
            res.status(200).send(newQuiz)
            // console.log(newQuiz)
        })
    },
    // this will get all quizzes from the db
    allQuizzes: (req, res) => {
        const { id } = req.params;
        const db = req.app.get('db');
        db.get_all_quizzes({ id })
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
        const { quiz_title, quiz_intro, quiz_bg_img } = req.body;
        const db = req.app.get('db');
        db.edit_quiz({ id, quiz_title, quiz_intro, quiz_bg_img })
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
    }
}