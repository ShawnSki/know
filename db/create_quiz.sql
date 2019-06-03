INSERT INTO quizzes(quiz_title, quiz_intro, quiz_bg_img)
VALUES (${quiz_title}, ${quiz_intro}, ${quiz_bg_img})
returning *;