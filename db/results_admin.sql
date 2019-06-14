SELECT
    quizzes.id,
    quizzes.quiz_title,
    quizzes.quiz_survey1,
    quizzes.survey1_options,
    quizzes.creation_date,
    users.quiz_points,
    users.survey_response1,
    users.quiz_results
FROM  
    users
INNER JOIN quizzes 
ON users.quizzes_id = quizzes.id
WHERE quizzes.id = ${id}
order by users.quiz_points desc