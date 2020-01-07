const bcrypt = require('bcryptjs');
const router = require('express').Router();
const jwt = require('jsonwebtoken');

const Users = require("../users/users-model.js");


router.post('/register', (req, res) => {
    // implement registration
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
    user.password = hash;

    Users.insert(user)
        .then(({ id }) => {
            res.status(201).json({ status: 201, message: id });
        })
        .catch(error => {
            console.log(error);
        });
});

router.post('/login', (req, res) => {
    // implement login
    let { email, password } = req.body;

    Users.getByEmail({ email })
        .first()
        .then(user => {
            console.log('then', user)
            if (user && bcrypt.compareSync(password, user.password)) {
                // sign token
                const token = signToken(user); // new line

                // send the token
                res.status(200).json({
                    id: user.id,
                    token, // added token as part of the response sent
                    message: `Welcome ${user.username}!`,
                });
            } else {
                res.status(401).json({ message: "Invalid Credentials" });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.get("/logout", (req, res) => {
    if (req.session) {
        req.session.destroy(error => {
            if (error) {
                res.status(500).json({
                    message:
                        "you can checkout any time you like, but you can never leave!!!!!",
                });
            } else {
                res.status(200).json({ message: "logged out" });
            }
        });
    } else {
        res.status(200).end();
    }
});

///JSON web token
function signToken(user) {
    const payload = {
        username: user.username,
    };
    const secret = process.env.JWT_SECRET || 'is it secret, is it safe?';

    const options = {
        expiresIn: '1hr',
    };

    return jwt.sign(payload, secret, options);
}


module.exports = router;
