var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/list-products', (req, res, next) => {
    res.send([
        {
          "id": 782330,
          "gameTitle": "Doom: Eternal",
          "publisherName": "Bethesda",
          "gameStudio": "id Software",
          "genre": "FPS",
          "MSRP": 39.99
        },
        {
          "id": 546560,
          "gameTitle": "Half-Life: Alyx",
          "publisherName": "Valve",
          "gameStudio": "Valve",
          "genre": "VR",
          "MSRP": 59.99
        },
        {
          "id": 1145360,
          "gameTitle": "Hades",
          "publisherName": "Supergiant",
          "gameStudio": "Supergiant",
          "genre": "Rogue-like",
          "MSRP": 24.99
        },
        {
          "id": 2050650,
          "gameTitle": "Resident Evil 4",
          "publisherName": "Capcom",
          "gameStudio": "Capcom",
          "genre": "Horror",
          "MSRP": 59.99
        },
        {
          "id": 2208920,
          "gameTitle": "Assassins Creed: Valhalla",
          "publisherName": "Ubisoft",
          "gameStudio": "Ubisoft Montreal",
          "genre": "Third Person",
          "MSRP": 59.99
        }
     ])
})

module.exports = router;