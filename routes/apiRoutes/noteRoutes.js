const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
let data = require('../../db/notes.json');


router.get('/notes', (req, res) => {
    console.log('from get route', { data });
    res.json(data);
});

router.post('/notes', (req, res) => {
    const newNote = { ...req.body, id: uuidv4() };
    console.log(newNote);
    console.log(req.body);
    console.log('ldshfgdodihfsdo', data);
    data.unshift(newNote);
    fs.writeFile(
        path.join(__dirname, '../../db/notes.json'),
        JSON.stringify(data),
        function (err) {
            if (err) {
                res.status(404).json({ error: err });
            }
            res.json(data);
    });
});

router.delete('/notes/:id', (req, res) => {
    data = data.filter((el) => el.id !== req.params.id);
        fs.writeFile(
            path.join(__dirname, '../../db/notes.json'),
            JSON.stringify(data),
            function (err) {
                if (err) {
                    res.status(404).json({ error: err});
                }
                res.json(data);
            });
    });


module.exports = router;