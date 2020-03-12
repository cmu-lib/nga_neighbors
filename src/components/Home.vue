<template>
  <b-container class="my-3">
    <b-jumbotron
      header="National Neighbors"
      lead="Distant Viewing the National Gallery of Art's &quot;collection of collections&quot;"
      bg-variant="secondary"
      text-variant="white"
    >
      <p>A project by Carnegie Mellon University and the University of Pittsburgh for the National Gallery of Art October 2019 Datathon.</p>
      <b-row>
        <b-button variant="light" :to="{name: 'Essay'}" class="m-2">See our results</b-button>
        <b-button variant="light" :to="{name: 'About'}" class="m-2">Learn more about the team</b-button>
      </b-row>
    </b-jumbotron>

    <b-row>
      <b-col lg="6" class="mx-auto">
        <h1 class="text-center">Get the big picture</h1>
        <p>We explored the visual cohesion of the National Gallery of Art's paintings, prints, and drawings in context with sibling collections. Read our interpretations or dive directly into our data visualizations.</p>
        <b-button :to="{name: 'Essay'}" variant="primary" class="my-2" block>Read visual essay</b-button>
        <b-list-group v-if="grids" class="my-3">
          <b-list-group-item v-for="grid in grids" :key="grid.id">
            <b-media>
              <template v-slot:aside>
                <b-img :src="grid.thumb" width="100" :alt="grid.title" />
              </template>
              <router-link :to="{name: 'GridView', params: {id: grid.id}}">{{ grid.title }}</router-link>
            </b-media>
          </b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col lg="6" class="mx-auto">
        <h1 class="text-center">Browse individual works</h1>
        <p>Click the button to hop to a random object from the National Gallery of Art and see its nearest visual neighbors. Or, enter the accession number of a specific work</p>
        <RandomWorkButton :works="works" block />
        <b-form-group
          id="accno_group"
          label-for="accno_input"
          label="Accession number"
          description="Enter the NGA accession number to load a specific object and its nearest neighbors"
          class="my-3"
        >
          <b-input-group>
            <b-form-input
              v-model="accno"
              id="accno_input"
              :state="valid_accno"
              placeholder="e.g. 2009.24.1"
            />
            <b-input-group-append>
              <b-button
                v-show="valid_accno"
                variant="outline-success"
                @click="goto_object"
              >Go to object</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RandomWorkButton from "./RandomWorkButton";

export default {
  name: "Home",
  components: {
    RandomWorkButton
  },
  props: {
    works: Array,
    grids: Array
  },
  data() {
    return {
      accno: null
    };
  },
  methods: {
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    },
    goto_object() {
      this.$router.push({ name: "WorkView", params: { id: this.accno } });
    },
    random_object() {
      const rand_accno = this.works[this.getRandomInt(this.works.length - 1)];
      this.$router.push({ name: "WorkView", params: { id: rand_accno } });
    }
  },
  computed: {
    valid_accno() {
      if (!!this.accno) {
        return this.works.indexOf(this.accno) >= 0;
      } else {
        return null;
      }
    }
  }
};
</script>

<style>
.jumbotron {
  background-image: url("/img/grid-sample.jpg");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}
</style>