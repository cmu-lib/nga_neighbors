<template>
  <b-container v-if="work">
    <b-row>
      <b-col cols="6">
        <h2>
          <em>{{ work.title }}</em>
        </h2>
        <h3>{{ work.attribution }}</h3>
        <p>{{ work.accessionnum }}</p>
        <p>
          <span class="dating" v-if="work.displaydate">{{ work.displaydate }}</span>
        </p>
        <p>
          <span class="medium" v-if="work.medium">({{ work.medium }})</span>
        </p>
        <p>{{ work.creditline }}</p>
        <p>
          <a :href="web_url">See this work at the NGA website</a>
        </p>
        <h4>Nearest visual neighbors</h4>
        <b-list-group>
          <WorkPreview v-for="nn in work.neighbors" :key="nn" :id="nn" />
        </b-list-group>
      </b-col>
      <b-col cols="6">
        <img :src="work.iiif" :alt="work.title" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { HTTP } from "../main";
import WorkPreview from "./WorkPreview";

export default {
  name: "Work",
  components: {
    WorkPreview
  },
  props: {
    id: String,
    works: Array,
    grids: Array
  },
  data() {
    return { neighbors: [] };
  },
  asyncComputed: {
    work() {
      return HTTP.get("/data/nga/work/" + this.id + ".json").then(
        response => {
          return response.data;
        },
        error => {
          console.log(error);
        }
      );
    }
  },
  computed: {
    web_url() {
      return (
        "https://www.nga.gov/collection/art-object-page." +
        this.work.objectid +
        ".html"
      );
    }
  }
};
</script>