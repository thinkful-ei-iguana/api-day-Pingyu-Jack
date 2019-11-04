import $ from 'jquery';
import api from './api';
import 'normalize.css';
import './index.css';
import store from './store.js';

import shoppingList from './shopping-list';

const main = function() {
    api.getItems()
        .then(res => res.json())
        .then((items) => {
            const item = items[0];
            return api.updateItem(item.id, { name: 'foobar' });
        })
        .then(res => res.json())
        .then(() => console.log('updated!'));

    console.log(api.BASE_URL);
    shoppingList.bindEventListeners();
    shoppingList.render();
};

$(main);

window.store = store;