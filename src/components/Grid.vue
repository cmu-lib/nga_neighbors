<template>
  <div v-if="grid">
    <h1>{{ grid.title }}</h1>
    <IIIF v-if="grid" :id="grid.id" :info_url="info_url" />
    <b-container>
      <p>{{ grid.description }}</p>
    </b-container>
  </div>
</template>

<script>
import IIIF from "./IIIF";

export default {
  name: "Grid",
  components: {
    IIIF
  },
  props: {
    id: String,
    works: Array,
    grids: Array
  },
  data() {
    return {};
  },
  computed: {
    info_url() {
      return "http://localhost:8080/grids/" + this.grid.id + "/info.json";
    },
    grid() {
      return this.grids.filter(x => x.id == this.id)[0];
    }
  }
};
</script>
