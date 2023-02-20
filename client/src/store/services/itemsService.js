import axios from 'axios'

const getItems = async () => {
    const items = await axios.get('/api/items');

    return items.data;
}

const getItem = async (id) => {
    const item = await axios.get(`/api/items/${id}`);

    return item.data;
}

const createItem = async (itemData) => {
    const item = await axios.post(`/api/items`, itemData);

    return item.data;
}

const deleteItem = async (id) => {
    const item = await axios.delete(`/api/items/${id}`);

    return item.data;
}

const itemsService = {
    getItems,
    getItem,
    createItem,
    deleteItem
}

export default itemsService;