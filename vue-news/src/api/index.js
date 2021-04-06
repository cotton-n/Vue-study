import axios from 'axios';

const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
};

function fetchList(pageName) {
  return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

function fetchUserInfo(name) {
  return axios.get(`${config.baseUrl}user/${name}.json`);
}

function fetchItemInfo(id) {
  return axios.get(`${config.baseUrl}item/${id}.json`);
}

export { fetchUserInfo, fetchItemInfo, fetchList };
