import { fetchUserInfo, fetchItemInfo, fetchList } from '../api';

export default {
  FETCH_USER({ commit }, name) {
    return fetchUserInfo(name)
      .then(({ data }) => commit('SET_USER', data))
      .catch((err) => console.log(err));
  },
  FETCH_ITEM({ commit }, id) {
    return fetchItemInfo(id)
      .then(({ data }) => commit('SET_ITEM', data))
      .catch((err) => console.log(err));
  },
  FETCH_LIST({ commit }, pageName) {
    return fetchList(pageName)
      .then(({ data }) => commit('SET_LIST', data))
      .catch((err) => console.log(err));
  },
  CLEAR_LIST({ commit }) {
    commit('SET_CLEAR_LIST');
  },
};
