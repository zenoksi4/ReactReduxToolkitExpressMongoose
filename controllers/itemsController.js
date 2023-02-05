const Item = require('../models/itemModel');

const getItems = async (req, res) => {
    try {
        const items = await Item.find();

        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: "Failed to get list items, please try again"});
    }
};


module.exports = {
    getItems
}