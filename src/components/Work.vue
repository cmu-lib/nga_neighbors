<template>
  <div v-if="work">
    <b-row>
      <b-col cols="6">
        <h3>{{ work.accessionnum }}</h3>
        <p>
          {{ work.attribution }},
          <em>{{ work.title }}</em>
        </p>
        <p>
          <span class="dating" v-if="work.displaydate">{{ work.displaydate }}</span>
        </p>
        <p>
          <span class="medium" v-if="work.medium">({{ work.medium }})</span>
        </p>
        <p>{{ work.creditline }}</p>
        <h4>Nearest visual neighbors</h4>
        <b-list-group>
          <WorkPreview v-for="nn in work.neighbors" :key="nn" :id="nn" />
        </b-list-group>
      </b-col>
      <b-col cols="6">
        <img :src="work.iiif" :alt="work.title" />
      </b-col>
    </b-row>
  </div>
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
    id: String
  },
  data() {
    return { neighbors: [] };
  },
  asyncComputed: {
    work() {
      return HTTP.get("/works/" + this.id + ".json").then(
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
    work_image() {
      return "http://localhost:8000/images/" + this.work.filepath;
    }
  }
};
</script>