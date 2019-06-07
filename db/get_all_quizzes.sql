SELECT * FROM quizzes
WHERE admins_id = ${id}
ORDER BY id DESC;