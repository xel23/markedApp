<template>
  <div>
    <h1>{{ msg }}</h1>
    <textarea :value="input" @input="update"></textarea>
    <div v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
export default {
  // input: '',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      input: '# hello'
    }
  },
  computed: {
    compiledMarkdown: () => {
      return this.input;
    }
  },
  methods: {
    update: (e) => {
      this.input = e.target.value;
    }
  }
}
</script>

<style>

</style>
