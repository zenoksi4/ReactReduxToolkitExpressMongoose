const express = require('express');
const router = express.Router();
const { getItems, createItem, getItemById, deleteItemById } = require('../controllers/itemsController')


//file storage

// route GET /api/items
// get all items
router.get('/', getItems)

// route GET /api/items/:id
// get item by id
router.get('/:id', getItemById)

// route POST /api/items
// create item
router.post('/', createItem)

// route DELETE /api/items/:id
// delete item
router.delete('/:id', deleteItemById)


module.exports = router;