<template>
  <div>
    <p>name: {{ user.id }}</p>
    <p>karma: {{ user.karma }}</p>
    <p>created: {{ user.created }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['user']),
  },
  created() {
    const name = this.$route.params.name;
    this.$store.dispatch('FETCH_USER', name);
  },
};
</script>

<style scoped></style>
