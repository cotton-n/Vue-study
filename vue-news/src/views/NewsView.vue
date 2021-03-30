<template>
  <div>
    <div v-for="item in news">{{ item.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api';

export default {
  data() {
    return {
      news: [],
    };
  },
  created() {
    fetchNewsList()
      .then((response) => (this.news = response.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped></style>
