INSERT INTO Accounts(freebie, freebieDate)
VALUES (${freebie}, ${freebieDate});

INSERT INTO Admins(firstName, lastName, email, password, company)
VALUES (${firstName}, ${lastName}, ${email}, ${password}, ${company})
returning email, ID;