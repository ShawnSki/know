INSERT INTO quiz_questions(question, remediation, answer, distractor1, distractor2, distractor3)
VALUES (${question}, ${remediation}, ${answer}, ${distractor1}, ${distractor2}, ${distractor3})
returning *;