<template>
  <div class="container mt-5" id="app">
    <div class="row">
      <div class="col-6 m-auto">
        <textarea @input="update"></textarea>
      </div>
      <div class="col-6 m-auto">
        <div v-html="compiledMarkdown"></div>
        <h2>{{test}}</h2>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col">
        <button class="btn btn-success" @click="save">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  const url = 'http://localhost:3000/api/files/';

  class MD {
    static getAllFiles() {
      return new Promise(async (resolve, reject) => {
        try {
          const res = await axios.get(url);
          const data = res.data;
          resolve(data.map(file => {

          }))
        } catch (err) {

        }
      })
    }
  }

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      input: '# hello',
      test: '1'
    }
  },
  computed: {
    compiledMarkdown: () => {
      // alert('comp' + this.input);
      return this.test;
    }
  },
  methods: {
    update: (e) => {
      // alert(e.target.value);
      this.test = e.target.value;
    },
    save: () => {
      const file = {
        text: 'text'
      };
      // axios.post(url, file).then(response => {
      //   console.log(response);
      // })

      alert(axios.get(url));
    }
  }
}
</script>

<style>

</style>
