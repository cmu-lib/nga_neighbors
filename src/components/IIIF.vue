<template>
  <div :id="id" class="osd"></div>
</template>

<script>
import OpenSeadragon from "openseadragon";
export default {
  name: "IIIF",
  props: {
    id: {
      type: String,
      default: "iiif"
    },
    square_size: {
      type: Number,
      default: 256
    },
    spacing: {
      type: Number,
      default: 25
    },
    info_url: String,
    extra: Object
  },
  data() {
    return {};
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
    OpenSeadragon(this.options);
  },
  updated() {
    OpenSeadragon(this.options);
  }
};
</script>

<style>
.osd:not(:fullscreen) {
  position: relative;
  height: 600px;
  width: 100%;
  border-top: 1px lightgray solid;
  border-bottom: 1px lightgray solid;
}
</style>