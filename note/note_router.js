const router = require('express').Router();

const Note = require('./note_model')

router.get('/:strain_id', (req, res) => {
    const { strain_id } = req.params;

    Notes.get(Number(strain_id))
        .then(notes => {
            console.log(notes);
            res.status(200).json(notes);
        })
        .catch(err => {
            console.log(err);
        });
});

router.get('/:strain_id/:note_id', (req, res) => {
    const { strain_id, note_id } = req.params;

    Notes.findById(strain_id, note_id)
        .then(note => {
            console.log(note)
            res.status(200).json(note);

        })
        .catch(err => {
            console.log(err);
        })
});

router.post('/:strain_id', (req, res) => {
    const strainNote = req.body;

    Notes.add(strainNote)
        .then(note => {
            res.status(201).json(note);
        })
        .catch(err => {
            console.log(err);
        });
});

router.put('/:strain_id/:note_id', (req, res) => {
    const { note_id } = req.params;
    const changes = req.body;

    Notes.update(note_id, changes)
        .then(update => {
            res.status(200).json(update);
        })
        .catch(err => {
            console.log(err);
        });
});

router.delete('/:strain_id/:note_id', (req, res) => {
    const { note_id } = req.params;

    Notes.remove(note_id)
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
        })
});

module.exports = router;