const express = require('express');
const router = express.Router();
const { getItems, createItem, getItemById, deleteItemById } = require('../controllers/itemsController')
const path = require('path');
const multer = require('multer');



//file storage
const storage = multer.diskStorage({
    destination: './assets',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage });

// route GET /api/items
// get all items
router.get('/', getItems)

// route GET /api/items/:id
// get item by id
router.get('/:id', getItemById)

// route POST /api/items
// create item
router.post('/', upload.single('itemImage'), createItem)

// route DELETE /api/items/:id
// delete item
router.delete('/:id', deleteItemById)


module.exports = router;