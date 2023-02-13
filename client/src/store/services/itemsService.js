import axios from 'axios'

const getItems = async () => {
    const items = await axios.get('/api/items');

    return items.data;
}

const getItem = async (id) => {
    const item = await axios.get(`/api/items/${id}`);

    return item.data;
}

const itemsService = {
    getItems,
    getItem
}

export default itemsService;