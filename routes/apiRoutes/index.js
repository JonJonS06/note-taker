const router = require('express').router();
const noteRoutes = require('./noteRoutes');

router.use(noteRoutes);

module.exports = router;
