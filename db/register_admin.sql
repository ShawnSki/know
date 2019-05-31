INSERT INTO accounts(freebie, freebie_date)
VALUES (${freebie}, ${freebie_date});

INSERT INTO admins(firstname, lastname, email, password, company)
VALUES (${firstname}, ${lastname}, ${email}, ${password}, ${company})
returning email, ID;