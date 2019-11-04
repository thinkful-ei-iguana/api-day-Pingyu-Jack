const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Pingyu-Jack';

const getItems = function() {
    return fetch(`${BASE_URL}/items`);
};

const createItem = function(name) {
    let newItem = JSON.stringify({ name: name });
    return fetch(`${BASE_URL}/items`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: newItem
    });
};

const updateItem = function(id, updateData) {
    return fetch(`${BASE_URL}/items/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateData)
    });
};

const deleteItem = function(id) {
    return fetch(`${BASE_URL}/items/${id}`, {
        method: 'DELETE'
    });
};

const createError = function(error) {
    const newError = JSON.stringify({
        name: error
    });
};

export default {
    getItems,
    createItem,
    updateItem,
    deleteItem,
    createError
};