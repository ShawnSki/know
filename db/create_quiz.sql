INSERT INTO quizzes(admins_id, quiz_title, quiz_intro, quiz_bg_img, quiz_survey1, survey1_options)
VALUES (${admins_id}, ${quiz_title}, ${quiz_intro}, ${quiz_bg_img}, ${quiz_survey1}, ${survey1_options})
returning *;