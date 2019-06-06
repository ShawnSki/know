INSERT INTO quiz_questions(quizzes_id, question, remediation, answer, distractor1, distractor2, distractor3)
VALUES (${quizzes_id}, ${question}, ${remediation}, ${answer}, ${distractor1}, ${distractor2}, ${distractor3})
returning *;