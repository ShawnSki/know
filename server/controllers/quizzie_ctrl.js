
module.exports = {
    // creates new quiz
    addQuiz: (req, res) => {
        const { quiz_title, quiz_intro, quiz_bg_img } = req.body;
        req.app.get('db').create_quiz({
            quiz_title,
            quiz_intro,
            quiz_bg_img
        }).then(newQuiz => {
            res.status(200).send(newQuiz)
        })
    }
}