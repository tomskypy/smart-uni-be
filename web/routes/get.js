var router      = require('express').Router(),
    qrpoints    = require('../res/qrpoints'),
    faculties   = require('../res/faculties');

/* GET QR Points. */
router.get('/qrpoints', function (req, res) {
    res.send(JSON.stringify(qrpoints));
});

/* GET Faculties. */
router.get('/faculties', function (req, res) {
    res.send(JSON.stringify(faculties));
});

module.exports = router;