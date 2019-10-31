<template>
  <div :id="id" class="osd"></div>
</template>

<script>
import OpenSeadragon from "openseadragon";
import subpath from "../main";
export default {
  name: "IIIF",
  props: {
    id: {
      type: String,
      default: "iiif"
    },
    info_url: String,
    extra: Object
  },
  data() {
    return {
      viewer: null
    };
  },
  computed: {
    options() {
      return {
        id: this.id,
        prefixUrl: "/nga/osd/",
        tileSources: this.info_url
      };
    }
  },
  mounted() {
    return OpenSeadragon(this.options);
  }
};
</script>

<style>
.osd {
  height: 600px;
  width: 100%;
}
</style>