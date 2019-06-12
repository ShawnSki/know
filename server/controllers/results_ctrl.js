
module.exports = {
    getQuizResults: (req, res) => {
        const { id } = req.params;
        const db = req.app.get('db');
        db.results_quiz_by_id({ id })
            .then(results => {
            res.status(200).send(results)
        })
    }
}