<template>
  <div>
    <section>
      <!-- 사용자 상세 정보 -->
      <user-profile>
        <router-link slot="name" :to="`/user/${item.user}`">
          {{ item.user }}
        </router-link>
        <template slot="time">{{ 'Posted ' + item.time_ago }}</template>
      </user-profile>
    </section>
    <section>
      <h2>{{ item.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="item.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile';

export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters(['item']),
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', id);
  },
};
</script>

<style scoped></style>
