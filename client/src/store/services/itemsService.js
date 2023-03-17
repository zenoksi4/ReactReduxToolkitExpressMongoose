import axios from 'axios'

const proxy = 'https://market-cs.onrender.com'
const getItems = async () => {
    const items = await axios.get(`${proxy}/api/items`);

    return items.data;
}

const getItem = async (id) => {
    const item = await axios.get(`${proxy}/api/items/${id}`);

    return item.data;
}

const createItem = async (itemData) => {
    const item = await axios.post(`${proxy}/api/items`, itemData);

    return item.data;
}

const deleteItem = async (id) => {
    const item = await axios.delete(`${proxy}/api/items/${id}`);

    return item.data;
}

const itemsService = {
    getItems,
    getItem,
    createItem,
    deleteItem
}

export default itemsService;