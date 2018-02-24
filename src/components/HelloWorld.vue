<template>
  <div class="hello">
    <div class="form">
      <input name="title" type="text" placeholder="Title" v-model="title"/> <br>
      <textarea placeholder="HTML like content" v-model="content"></textarea> <br>
      <span>Content length: {{contentLength}} </span>
      <button v-on:click="updateStorage">Update</button>
    </div>
    <div class="html-output">
      <h1>{{ title }}</h1>
      <div v-html="content"></div>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'HelloWorld',
    data() {
      const {title, content} = storage.data;

      return {
        msg: 'Test app demo',
        title,
        content
      };
    },
    methods: {
      updateStorage() {
        const {title, content} = this;
        storage.update({title, content});
      }
    },
    computed: {
      contentLength() {
        return this.content ? this.content.length : 0;
      }
    },
    created() {
      storage.fetch().then(data => {
        this.content = data.content
        this.title = data.title
      })

    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
