<template>
  <b-container>
    <b-list-group v-if="grids">
      <b-list-group-item v-for="grid in grids" :key="grid.id">
        <router-link :to="{name: 'GridView', params: {id: grid.id}}">{{ grid.title }}</router-link>
      </b-list-group-item>
    </b-list-group>
    <b-form-group
      id="accno_group"
      label-for="accno_input"
      label="Accession number"
      description="Enter accession number to view object and its nearest neighbors"
    >
      <b-input-group>
        <b-form-input v-model="accno" id="accno_input" :state="valid_accno" />
        <b-input-group-append>
          <b-button v-show="valid_accno" variant="outline-success" @click="goto_object">Go to object</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-form-group>
    <RandomWorkButton :works="works" />
  </b-container>
</template>

<script>
import { HTTP } from "../main";
import RandomWorkButton from "./RandomWorkButton";

export default {
  name: "Home",
  components: {
    RandomWorkButton
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
  },
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
