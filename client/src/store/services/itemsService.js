import axios from 'axios'

const getItems = async () => {
    const items = await axios.get('/api/items');

    return items.data;
}

const itemsService = {
    getItems
}

export default itemsService;