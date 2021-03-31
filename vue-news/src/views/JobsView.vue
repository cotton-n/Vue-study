<template>
  <div>
    <p v-for="item in jobs">
      <a v-bind:href="item.url">
        {{ item.title }}
      </a>
      <small>{{ item.time_ago }}, {{ item.domain }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['jobs']),
  },
  created() {
    this.$store.dispatch('FETCH_JOBS');
  },
};
</script>

<style scoped></style>
