var router = require('express').Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('home', { title: 'Home' });
});

/* GET munimap. */
router.get('/munimap', function(req, res) {
    var device = req.query.device;
    if (!device || device == '') {
      device = 'desktop';
    }

    var placeID = req.query.id;
    var mapZoom = undefined
    if (!placeID || placeID == '') {
      placeID = 'BNA01N01203';
      mapZoom = 15;
    }

    res.render('munimap', { title: 'MUNI Map', device: device, muniTarget: placeID, mapZoom: mapZoom});
  });

module.exports = router;
