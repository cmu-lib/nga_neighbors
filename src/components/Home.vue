<template>
  <b-container>
    <b-list-group v-if="grids">
      <b-list-group-item v-for="grid in grids" :key="grid.id">
        <router-link :to="{name: 'GridView', params: {id: grid.id}}">{{ grid.title }}</router-link>
      </b-list-group-item>
    </b-list-group>
    <b-list-group v-if="works">
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
    },
    grids() {
      return HTTP.get("/grids/images.json").then(
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
