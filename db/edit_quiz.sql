UPDATE quizzes
SET quiz_title = ${quiz_title},
    quiz_intro = ${quiz_intro},
    quiz_bg_img = ${quiz_bg_img}
WHERE quizzes.id = ${id};