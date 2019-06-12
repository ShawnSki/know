SELECT
    quizzes.id,
    quizzes.quiz_title,
    quizzes.quiz_bg_img,
    quizzes.quiz_survey1,
    quizzes.survey1_options,
    users.username,
    users.quiz_points,
    users.survey_response1,
    quizzes.creation_date
FROM  
    users
INNER JOIN quizzes 
ON users.quizzes_id = quizzes.id
WHERE quizzes.id = ${id}
order by users.quiz_points desc
LIMIT 10; 