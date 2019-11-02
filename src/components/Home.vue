<template>
  <b-container class="my-3">
    <p></p>
    <b-row>
      <b-col lg="6" class="my-3">
        <h1 class="text-center">Get the big picture</h1>
        <p>Explore visualizations of the entire NGA paintings and prints collection in context with other sibling collections.</p>
        <b-list-group v-if="grids">
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
      <b-col lg="6" class="my-3">
        <h1 class="text-center">Browse individual works</h1>
        <p>Look up an individual work from the NGA, or hop to one at random, to see what its nearest visual neighbors are.</p>
        <b-form-group
          id="accno_group"
          label-for="accno_input"
          label="Accession number"
          description="Enter accession number to view object and its nearest neighbors"
        >
          <b-input-group>
            <b-form-input v-model="accno" id="accno_input" :state="valid_accno" />
            <b-input-group-append>
              <b-button
                v-show="valid_accno"
                variant="outline-success"
                @click="goto_object"
              >Go to object</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
        <RandomWorkButton :works="works" />
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
