<template>
  <b-container fluid class="my-4 p-0" v-if="grid">
    <h1 class="mx-3">{{ grid.title }}</h1>
    <IIIF v-if="grid" :id="grid.id" :info_url="info_url" />
    <b-container class="my-4">
      <div v-html="grid.description" />
    </b-container>
  </b-container>
</template>

<script>
import IIIF from "./IIIF";
import { base } from "../main";

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
      return base + "/iiif/" + this.grid.id + "/info.json";
    },
    grid() {
      return this.grids.filter(x => x.id == this.id)[0];
    }
  }
};
</script>

<style>
.osd {
  border-top: 1px lightgray solid;
  border-bottom: 1px lightgray solid;
}
</style>