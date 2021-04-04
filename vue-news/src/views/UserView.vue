<template>
  <div>
    <user-profile>
      <div slot="name">{{ user.id }}</div>
      <span slot="time">{{ 'Joined ' + user.created }}, </span>
      <span slot="karma">{{ user.karma }}</span>
    </user-profile>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile.vue';

export default {
  components: {
    UserProfile,
  },
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
