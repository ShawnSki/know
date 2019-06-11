INSERT INTO users(username, quizzes_id)
VALUES (${username}, ${quizzes_id})
returning *;