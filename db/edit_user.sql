UPDATE users
SET username = ${username},
    quiz_points = ${quiz_points},
    survey_response1 = ${survey_response1},
    quiz_results = ${quiz_results}
WHERE id = ${id};