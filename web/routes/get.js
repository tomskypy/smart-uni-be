var router      = require('express').Router(),
    qrpoints    = require('../res/qrpoints');

/* GET QR Points. */
router.get('/qrpoints', function (req, res) {
    res.send(JSON.stringify(qrpoints));
});

module.exports = router;