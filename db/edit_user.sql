UPDATE users
SET username = ${username},
    quiz_points = ${quiz_points},
    survey_response1 = ${survey_response1}
WHERE id = ${id};