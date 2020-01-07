const router = require('express').Router();

const Users = require('../users/users-model.js');

router.get('/', async (req, res) => {
    await Users.get()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            console.log(err)
        })
});

router.get('/:id', async (req, res) => {
    await Users.getById(req.params.id)
        .then(user => {
            console.log(res)
            res.status(200).json(user)
        })
        .catch(err => {
            console.log(err)
        })
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Users.update(id, changes)
        .then(updated => {
            res.status(200).json(updated);
        })
        .catch(err => {
            console.log(err);
        });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Users.remove(id)
        .then(axed => {
            res.status(200).json(axed)
        })
        .catch(err => {
            console.log(err);
        });
});

module.exports = router;