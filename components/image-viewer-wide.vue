<template>
  <div style="margin-bottom: 30px">
    <div style="display: flex;overflow: auto" class="scrollbar">
      <div v-for="(item, i) of image" :key="i" style="margin-left: 10px;">
        <img
          width="100%"
          height="100%"
          style=" display: block;
        width: 200px;
        height: 200px;
        cursor: pointer;"
          :src="$axios.defaults.baseURL + '/uploads/' + item.name"
          @click="viewImage(item.name, item.sort)"
        />
      </div>
    </div>
    <v-dialog v-model="imageView" width="700px">
      <div
        class="prod-dialog"
        style="display: flex;justify-content: center;align-items: center;width:700px;background-color: white"
      >
        <div style="width: 100%" v-if="name">
          <img
            class="prod-img"
            style="object-fit: cover;width: 700px"
            :src="$axios.defaults.baseURL + '/uploads/' + name"
          />
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'ImageViewerWide',
  props: {
    image: {
      type: Array,
      default: null
    }
  },
  data: () => ({
    imageView: false,
    name: null,
    title: null
  }),
  mounted() {
    window.console.log(this.$axios.defaults.baseURL)
  },
  methods: {
    viewImage(name, title) {
      this.imageView = true
      this.name = name
      this.title = title
    }
  }
}
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  .prod-dialog {
    width: 100% !important;
  }
  .prod-img {
    width: 100% !important;
  }
}
</style>
