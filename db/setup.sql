CREATE TABLE admins (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(50),
    lastname VARCHAR(50),
    email VARCHAR(50),
    password TEXT,
    company VARCHAR(50)
);

CREATE TABLE accounts (
    id SERIAL PRIMARY KEY,
    admins_id INTEGER REFERENCES admins(id),
    freebie BOOLEAN,
    freebie_date DATE ,
    paid BOOLEAN,
    paidDate DATE
);

CREATE TABLE quizzes (
    id SERIAL PRIMARY KEY,
    admins_id INTEGER REFERENCES admins(id),
    create_date DATE,
    quiz_title VARCHAR(200),
    quiz_intro VARCHAR(500),
    quiz_bg_img VARCHAR(800),
    question_count INTEGER,
    quiz_survey1 VARCHAR(100), 
    quiz_survey2 VARCHAR(100),
    quiz_survey3 VARCHAR(100)
);

CREATE TABLE quiz_questions (
    id SERIAL PRIMARY KEY,
    quizzes_id INTEGER REFERENCES quizzes(id),
    question VARCHAR(1000),
    remediation VARCHAR(1000)
);

CREATE TABLE quiz_answers (
    id SERIAL PRIMARY KEY,
    quiz_questions_id INTEGER REFERENCES quiz_questions(id),
    answers VARCHAR(500),
    correct VARCHAR(500)
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100),
    quizzes_id INTEGER REFERENCES quizzes(id),
    quiz_taken DATE,
    quiz_points INTEGER,
    survey_response1 VARCHAR(100),
    survey_response2 VARCHAR(100),
    survey_response3 VARCHAR(100)
);