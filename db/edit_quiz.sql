UPDATE quizzes
SET quiz_title = ${quiz_title},
    quiz_intro = ${quiz_intro},
    quiz_bg_img = ${quiz_bg_img},
    quiz_survey1 = ${quiz_survey1},
    survey1_options = ${survey1_options}
WHERE quizzes.id = ${id};