<template>
  <b-container fluid class="mx-0">
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
</style>