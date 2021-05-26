<template>
  <input type="checkbox" :value="value" @click="toggleCheckBox" />
</template>

<script>
export default {
  // NOTE: v-model은 input이벤트와 value값의 조합
  // @input 이벤트
  // :value 깂
  props: ['value'],
  methods: {
    toggleCheckBox() {
      this.$emit('input', !this.value);
    },
  },
};
</script>
