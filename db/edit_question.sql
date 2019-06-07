UPDATE quiz_questions
SET question = ${question},
    remediation = ${remediation},
    answer = ${answer},
    distractor1 = ${distractor1},
    distractor2 = ${distractor2},
    distractor3 = ${distractor3}
WHERE quiz_questions.id = ${id};