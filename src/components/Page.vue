
<template>
  <div class="page">
    <h1>{{title}}</h1>
    <div class="page-body" v-html="content"></div>
  </div>
</template>

<script>
  export default {
    name: "page",
    data() {
      return storage.data.pages.find(page => page.path == this.$route.params.path)
    }

  }
</script>

<style scoped>

</style>
