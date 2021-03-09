import * as getters from './getters';
import * as mutations from './mutations';

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          var todoItem = JSON.parse(localStorage.getItem(localStorage.key(i)));
          arr.push(todoItem);
        }
      }
    }
    return arr;
  },
};

const state = {
  todoItems: storage.fetch(),
};

export default {
  state,
  getters,
  mutations,
};
