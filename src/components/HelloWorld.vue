<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
<p>
      {{title}}
</p> 
<p>{{contentLength}}</p> 
<div v-html="content"></div>
    <input name="title" type="text" v-model="title" /> <br>
    <textarea v-model="content"></textarea> <br>
    <button v-on:click="updateStorage">Update</button>
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
</style>
