<template>
  <b-container fluid class="p-0">
    <b-navbar toggleable="lg" variant="dark" type="dark">
      <b-navbar-brand :to="{name: 'Home'}">National Neighbors</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{name: 'About'}">About</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-form>
            <RandomWorkButton :works="works" />
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view :works="works" :grids="grids" />
    <nav class="navbar sticky-bottom">
      <b-navbar-nav>
        <b-nav-text>
          ©
          <a href="https://library.cmu.edu">Carnegie Mellon University Libraries</a> 2019. Site built by
          <a href="https://matthewlincoln.net">Matthew Lincoln</a>. Visualizations and data by Sarah Reiff Conell, Lingdong Huang, Golan Levin, and Matthew Lincoln
          <router-link :to="{name: 'About'}">(read more)</router-link>
        </b-nav-text>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="https://github.com/cmu-lib/nga_neighbors">GitHub</b-nav-item>
      </b-navbar-nav>
    </nav>
  </b-container>
</template>

<script>
import { HTTP } from "./main";
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
    HTTP.get("/data/nga/images.json").then(
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
