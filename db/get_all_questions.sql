SELECT * FROM quiz_questions
WHERE quizzes_id = ${id}
order by id desc;