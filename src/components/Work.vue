<template>
  <div v-if="work">
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
    <img :src="work.iiif" :alt="work.title" />
  </div>
</template>

<script>
import { HTTP } from "../main";

export default {
  name: "Work",
  props: {
    id: String
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