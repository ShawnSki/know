
module.exports = {
    // creates new quiz
    addQuiz: (req, res) => {
        const { admins_id, quiz_title, quiz_intro, quiz_bg_img } = req.body;
        req.app.get('db').create_quiz({
            admins_id,
            quiz_title,
            quiz_intro,
            quiz_bg_img
        }).then(newQuiz => {
            res.status(200).send(newQuiz)
        })
    },
    // this will get all quizzes from the db
    allQuizzes: (req, res) => {
        const db = req.app.get('db');
        db.get_all_quizzes()
            .then(quizzes => {
                res.status(200).send(quizzes)
            })
    },
    addQuestion: (req, res) => {
        const { question, remediation, answer, distractor1, distractor2, distractor3 } = req.body;
        req.app.get('db').createQuestion({
            question,
            remediation,
            answer,
            distractor1,
            distractor2,
            distractor3
        }).then(newQuestion => {
            res.status(200).send(newQuestion)
        })
    }
}