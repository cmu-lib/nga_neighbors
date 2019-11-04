<template>
  <b-container fluid class="p-0 d-flex flex-column parent">
    <b-navbar variant="dark" type="dark">
      <b-navbar-brand :to="{name: 'Home'}">
        <img
          src="/nga/img/avatar.jpg"
          class="d-none d-sm-inline align-center mr-3 hidden-xs"
          alt="Similar image squares"
          width="50"
        />
        National Neighbors
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-navbar-nav>
        <b-nav-item :to="{name: 'About'}">About</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <RandomWorkButton :works="works" size="sm" />
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>
    <router-view :works="works" :grids="grids" class="flex-grow-1" />
    <b-navbar variant="dark" type="dark" clss="mt-auto">
      <b-navbar-nav>
        <b-nav-text>
          ©
          <a href="https://library.cmu.edu">Carnegie Mellon University Libraries</a> 2019. Site built by
          <a href="https://matthewlincoln.net">Matthew Lincoln</a>. Content by the
          <router-link :to="{name: 'About'}">project team</router-link>.
        </b-nav-text>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="https://github.com/cmu-lib/nga_neighbors">GitHub</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </b-container>
</template>

<script>
import { HTTP, appHTTP } from "./main";
import RandomWorkButton from "./components/RandomWorkButton";

export default {
  name: "app",
  components: {
    RandomWorkButton
  },
  data() {
    return {
      works: [],
      grids: []
    };
  },
  created() {
    HTTP.get("/data/nga/manifest.json").then(
      response => {
        this.works = response.data;
      },
      error => {
        console.log(error);
      }
    );
    appHTTP.get("/nga/images.json").then(
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

<style>
.parent {
  min-height: 100vh;
}
</style>
