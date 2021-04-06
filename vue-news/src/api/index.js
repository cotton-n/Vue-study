import axios from 'axios';

const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
};

async function fetchList(pageName) {
  try {
    const response = await axios.get(`${config.baseUrl}${pageName}/1.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function fetchUserInfo(name) {
  try {
    const response = await axios.get(`${config.baseUrl}user/${name}.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function fetchItemInfo(id) {
  try {
    const response = await axios.get(`${config.baseUrl}item/${id}.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export { fetchUserInfo, fetchItemInfo, fetchList };
