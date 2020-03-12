<template>
  <b-list-group-item v-if="work">
    <b-media>
      <template v-slot:aside>
        <b-img :src="thumbnail" width="64" :alt="work.title" />
      </template>
      <router-link
        :to="{name: 'WorkView', params: {id: work.accessionnum}}"
      >{{work.accessionnum}} - {{ work.title }}</router-link>
    </b-media>
  </b-list-group-item>
</template>

<script>
import { HTTP } from "../main";
export default {
  name: "WorkPreivew",
  props: {
    id: String
  },
  asyncComputed: {
    work() {
      return HTTP.get("/data/work/" + this.id + ".json").then(
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
    thumbnail() {
      return this.work.iiif.replace("!800,800", "!64,64");
    }
  }
};
</script>