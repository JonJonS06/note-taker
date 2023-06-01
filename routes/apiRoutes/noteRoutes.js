const router = require('express').Router();

let notesArray = require('../../db/notes');

const {
    createNewNote,
    deleteNote
} = require('../../lib/noteFunctions');


router.get('/notes', (req, res) => {
    let saved = notesArray;
    res.json(saved);
});

router.post('/notes', (req, res) => {
    if(notesArray){
    req.body.id = notesArray.length.toString();
    } else
    {req.body.id = 0}
    res.json(createNewNote(req.body, notesArray));
});

router.delete('/notes/:id', async (req, res) => {
    const { id } = req.params
    notesArray = await deleteNote(id, notesArray);
    res.json(notesArray);
});


module.exports = router;