const router = require('express').Router();
const Strain = require('./strain-model');

router.get('/:id/strain', (req, res) => {
    const { id } = req.params;

    Strain.get(id)
        .then(strains => {
            res.json(strains);
        })
        .catch(err => res.send(err));
})

router.get('/:id/strain/:strain_id', (req, res) => {
    const { id, strain_id } = req.params;

    Strain.findById(id, strain_id)
        .then(strainz => {
            console.log(strainz)
            res.status(200).json(strainz)
        })
        .catch(err => {
            console.log(err);
        });
});

router.post('/:id/strain', (req, res) => {
    const newStrain = req.body;
    console.log(newStrain)
    Strain.add(newStrain)
        .then(strain => {
            res.status(201).json(strain);
        })
        .catch(err => {
            console.log(err);
        });
});

router.put('/:id/strain/:strain_id', (req, res) => {
    const { strain_id } = req.params;
    const changes = req.body;

    Strain.update(strain_id, changes)
        .then(update => {
            res.status(200).json(update);
        })
        .catch(err => {
            console.log(err);
        });
});

router.delete('/:id/strain/:strain_id', (req, res) => {
    const { strain_id } = req.params

    Strain.remove(strain_id)
        .then(deleted => {
            res.status(200).json(deleted)
        })
        .catch(err => {
            console.log(err)
        });
});

module.exports = router;