
module.exports = {
    addUser: (req, res) => {
        const { username, quizzes_id } = req.body;
        req.app.get('db').create_user({
            username,
            quizzes_id
        }).then(newUser => {
            res.status(200).send(newUser)
        })
    },
    editUser: (req, res) => {
        const { id } = req.params;
        const { username, quiz_points, survey_response1 } = req.body;
        const db = req.app.get('db');
        db.edit_user({ id, username, quiz_points, survey_response1 })
            .then(updatedUser => {
            res.status(200).send(updatedUser)
        })
    }
}