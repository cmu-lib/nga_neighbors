<template>
  <b-container>
    <b-navbar toggleable="lg" type="dark" variant="secondary">
      <b-navbar-brand href="/">National Neighbors</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>Paintings</b-nav-item>
          <b-nav-item>Prints & Drawings</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
    <nav class="navbar sticky-bottom navbar-dark bg-secondary">
      <b-navbar-nav>
        <b-nav-text>
          ©
          <a href="https://library.cmu.edu">Carnegie Mellon University Libraries</a> 2019. Built by
          <a href="https://matthewlincoln.net">Matthew Lincoln</a>.
        </b-nav-text>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="https://github.com/cmu-lib/pp-vue">GitHub</b-nav-item>
      </b-navbar-nav>
    </nav>
  </b-container>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  }
};
</script>

<style>
img {
  width: 100%;
}
</style>