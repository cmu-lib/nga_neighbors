<template>
  <b-button variant="primary" @click="random_object" :size="size">I'm feeling lucky!</b-button>
</template>

<script>
export default {
  name: "RandomWorkButton",
  props: {
    works: Array,
    size: {
      type: String,
      default: null
    }
  },
  methods: {
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    },
    random_object() {
      const rand_accno = this.works[this.getRandomInt(this.works.length - 1)];
      this.$router.push({ name: "WorkView", params: { id: rand_accno } });
    }
  }
};
</script>
