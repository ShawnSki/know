INSERT INTO quizzes(admins_id, quiz_title, quiz_intro, quiz_bg_img)
VALUES (${admins_id}, ${quiz_title}, ${quiz_intro}, ${quiz_bg_img})
returning *;