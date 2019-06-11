
module.exports = {
    addUser: (req, res) => {
        const { username, quizzes_id } = req.body;
        req.app.get('db').create_user({
            username,
            quizzes_id
        }).then(newUser => {
            res.status(200).send(newUser)
        })
    }
}