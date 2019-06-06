DELETE FROM users
WHERE quizzes_id = ${id};

DELETE FROM quiz_questions
WHERE quizzes_id = ${id};

DELETE FROM quizzes
WHERE quizzes.id = ${id};