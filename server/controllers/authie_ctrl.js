const bcrypt = require('bcryptjs');


module.exports = {
    // registers new accounts (verifies that email doesn't already exist)
    register: async (req, res) => {
        const { firstName, lastName, email, password, company, freebie, freebieDate } = req.body;
        const db = req.app.get('db');
        const { session } = req;
        const adminFound = await db.check_admin_email({ email });
        if (adminFound[0]) return res.status(409).send('This email is already being used.');
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const createAdmin = await db.register_admin({
            firstName,
            lastName,
            email,
            password: hash,
            company,
            freebie,
            freebieDate
        })
        session.admin = { id: createAdmin[0].id, email: createAdmin[0].email }
        res.status(200).send(session.admin)
    },
    // Existing Admins can log in to accounts
    login: async (req, res) => {
        const { email, password } = req.body;
        const db = req.app.get('db');
        const { session } = req;
        const adminFound = await db.check_admin_email({ email });
        if (!adminFound[0]) return res.status(401).send('Admin account does not exist.');
        const authenticated = bcrypt.compareSync(password, adminFound[0].password);
        if (authenticated) {
            session.admin = { ID: adminFound[0].id, email: adminFound[0].email }
            res.status(200).send(session.admin)
        } else {
            return res.status(401).send('Incorrect email or password.')
        }
    }

}