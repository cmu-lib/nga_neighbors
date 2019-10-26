<template>
  <div></div>
</template>

<script>
import HTTP from "../main";

export default {
  name: "Grid",
  props: {
    id: String
  },
  asyncComputed: {
    results() {
      return HTTP.get("grids/" + this.id).then(
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