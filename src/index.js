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
            console.log(items);
            items.forEach((item) => store.addItem(item));
            shoppingList.render();
        });
    console.log(api.BASE_URL);
    shoppingList.bindEventListeners();
};

$(main);

window.store = store;