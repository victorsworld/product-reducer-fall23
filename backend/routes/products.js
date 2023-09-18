const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')

// path the is concatenated with the path from app.js
router.get('/', (request, response, callback) => response.send("Hello Products"))

router.get('/get-all-products', (req, res) => {
    res.send(
        [
            {
              id: uuidv4(),
              type: 'game', 
              title: "Hogwart's Legacy",
              publisher: "Warner Bros.",
              genre: "Adventure",
              price: 59.99
            },
            {
              id: uuidv4(),
              type: 'game',
              title: "Destiny 2",
              publisher: "Bungie",
              genre: "FPS",
              price: 29.99
            },
            {
              id: uuidv4(),
              type: 'game',
              title: "The Last of Us",
              publisher: "Sony",
              genre: "Adventure",
              price: 69.99
            },
            {
              id: uuidv4(),
              type: 'game',
              title: "Total War: Warhammer III",
              publisher: "Sega",
              genre: "Strategy",
              price: 49.99
            },
            {
              id: uuidv4(),
              type: 'movie',
              title: "Everything, Everywhere, All at Once",
              publisher: "A24",
              genre: "Action/Adventure",
              price: 29.99      
            },
            {
              id: uuidv4(),
              type: 'book',
              title: "Dune",
              publisher: "Penguin Classics",
              genre: "Action/Adventure",
              price: 20.99     
            }
          ]
    )
})

module.exports = router