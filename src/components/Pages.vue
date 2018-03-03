
<template>
  <ul>
    <li v-for="page in pages">
      <router-link :to="page.path">{{page.title}}</router-link>
    </li>
    <li><router-link to="new-page">New Page</router-link></li>
  </ul>
</template>

<script>
  export default {
    name: "pages",
    data() {
      return {
        pages: storage.data.pages
      }
    }

  }
</script>

<style scoped>

</style>
