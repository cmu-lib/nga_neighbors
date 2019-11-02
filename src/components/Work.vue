<template>
  <b-container v-if="work" class="my-4">
    <b-row>
      <b-col lg="6">
        <b-img center :src="work.iiif" :alt="work.title" class="m-3 work_image" />
      </b-col>
      <b-col lg="6">
        <b-card>
          <h2>
            <em>{{ work.title }}</em>
          </h2>
          <h3>{{ work.attribution }}</h3>
          <p>{{ work.accessionnum }}</p>
          <p>
            <span class="dating" v-if="work.displaydate">{{ work.displaydate }}</span>
          </p>
          <p>
            <span class="medium" v-if="work.medium">{{ work.medium }}</span>
          </p>
          <p>{{ work.creditline }}</p>
          <p>
            <a :href="web_url">See this work at the NGA website</a>
          </p>
        </b-card>
        <b-card header="Nearest visual neighbors" no-body class="my-2">
          <b-list-group flush>
            <WorkPreview v-for="nn in work.neighbors" :key="nn" :id="nn" />
          </b-list-group>
        </b-card>
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

<style>
img.work_image {
  max-width: 100%;
  max-height: 800px;
}
</style>