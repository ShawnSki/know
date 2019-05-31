CREATE TABLE Admins (
    ID SERIAL PRIMARY KEY,
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    email VARCHAR(50),
    password TEXT,
    company VARCHAR(50)
);

CREATE TABLE Accounts (
    ID SERIAL PRIMARY KEY,
    Admins_ID INTEGER REFERENCES Admins(ID),
    freebie BOOLEAN,
    freebieDate DATE ,
    paid BOOLEAN,
    paidDate DATE
);

CREATE TABLE Quizzes (
    ID SERIAL PRIMARY KEY,
    Admins_ID INTEGER REFERENCES Admins(ID),
    createDate DATE,
    quizTitle VARCHAR(200),
    quizIntro VARCHAR(500),
    quizBGImg VARCHAR(800),
    questionCount INTEGER,
    quizSurvey1 VARCHAR(100), 
    quizSurvey2 VARCHAR(100),
    quizSurvey3 VARCHAR(100),
);

CREATE TABLE Quiz_Questions (
    ID SERIAL PRIMARY KEY,
    Quizzes_ID INTEGER REFERENCES Quizzes(ID),
    question VARCHAR(1000),
    remediation VARCHAR(1000)
);

CREATE TABLE Quiz_Answers (
    ID SERIAL PRIMARY KEY,
    Quiz_Questions_ID INTEGER REFERENCES Quiz_Questions(ID),
    answers VARCHAR(500),
    correct VARCHAR(500)
);

CREATE TABLE Users (
    ID SERIAL PRIMARY KEY,
    username VARCHAR(100),
    Quizzes_ID INTEGER REFERENCES Quizzes(ID),
    quizTaken DATE,
    quizPoints INTEGER,
    surveyResponse1 VARCHAR(100),
    surveyResponse2 VARCHAR(100),
    surveyResponse3 VARCHAR(100)
);