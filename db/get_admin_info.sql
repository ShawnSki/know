SELECT * FROM admins
-- JOIN quizzes ON quizzes.admins_id = admins.id
where admins.id = ${id};