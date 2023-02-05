const express = require('express');
const router = express.Router();
const { getItems } = require('../controllers/itemsController')
const path = require('path');


// route GET /api/items
// get all items
router.get('/', getItems)

// route GET /api/items/:id
// get item by id
router.get('/:id', (req, res) => {
    res.send('Get single item')
})

// route POST /api/items
// create item
router.get('/', (req, res) => {
    res.send('Create item')
})


module.exports = router;