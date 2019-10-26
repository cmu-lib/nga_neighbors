<template>
  <b-container>
    <b-list-group>
      <b-list-group-item v-for="work in works" :key="work">
        <router-link :to="{name: 'WorkView', params: {id: work}}">{{ work }}</router-link>
      </b-list-group-item>
    </b-list-group>
  </b-container>
</template>

<script>
import { HTTP } from "../main";

export default {
  name: "Home",
  asyncComputed: {
    works() {
      return HTTP.get("/manifest.json").then(
        response => {
          return response.data;
        },
        error => {
          console.log(error);
        }
      );
    }
  }
};
</script>
