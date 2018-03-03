<template>
  <div class="hello">
    <div class="form">
      <input name="title" type="text" placeholder="Title" v-model="title"/> <br>
      <input name="path" type="text" placeholder="path" v-model="path"/> <br>
      <br>
      <textarea placeholder="HTML like content" v-model="content"></textarea> <br>
      <span>Content length: {{contentLength}} </span>
      <button v-on:click="create">Create</button>
    </div>
    <div class="html-output">
      <h1>{{ title }}</h1>
      <div v-html="content"></div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "new-page",
    data() {
      return {
        title: 'A',
        path: 'B',
        content: 'C'
      }

    },
    methods: {
      create() {
        const {title, path, content} = this;
        storage.data.pages.push({title, path, content});
        storage.sync()
        this.$router.push({path})
      }
    },
    computed: {
      contentLength() {
        return this.content ? this.content.length : 0;
      }
    }
  }
</script>

<style scoped>

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .hello {
    display: flex;
    flex-direction: row;
  }

  .form, .html-output {
    flex: 1;
  }
</style>
