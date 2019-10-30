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
import { HTTP } from "../main";
import IIIF from "./IIIF";

export default {
  name: "Grid",
  components: {
    IIIF
  },
  props: {
    id: String
  },
  data() {
    return {
      grids: []
    };
  },
  computed: {
    info_url() {
      return "http://localhost:8081/grids/" + this.grid.id + "/info.json";
    },
    grid() {
      return this.grids.filter(x => x.id == this.id)[0];
    }
  },
  mounted() {
    HTTP.get("/grids/images.json").then(
      response => {
        this.grids = response.data;
      },
      error => {
        console.log(error);
      }
    );
  }
};
</script>
