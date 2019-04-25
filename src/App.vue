<template>
  <div class="container-fluid mt-5" id="app">
    <div class="row">
      <div class="col-5 m-auto">
<!--        <textarea @input="update"></textarea>-->
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Input text</span>
          </div>
          <textarea class="form-control" aria-label="With textarea" rows="35" v-model="file.text"></textarea>
        </div>
      </div>
      <div class="col-5 m-auto">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Output text</span>
          </div>
          <textarea class="form-control" aria-label="With textarea" rows="35"></textarea>
        </div>
<!--        <div v-html="compiledMarkdown"></div>-->
      </div>
      <div class="col-2 m-auto">
        <ul class="list-group">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Morbi leo risus</li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
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

  export default {
    data () {
      return {
        file: {
          text: '',
          date: new Date()
        }
      }
    },
    created () {
      this.getList();
    },
    methods: {
      save() {
        const test = fetch('http://localhost:3000/api/files/')
          .then(res => res.json())
          .then(data => console.log(data))
          .catch(err => {
          console.error(err);
        });
        console.log(test);
      },
      getList() {

      }
    }
  }










//   import axios from 'axios';
//
//   const url = 'http://localhost:3000/api/files/';
//
//   class MD {
//     static getAllFiles() {
//       return new Promise(async (resolve, reject) => {
//         try {
//           const res = await axios.get(url);
//           const data = res.data;
//           resolve(data.map(file => {
//
//           }))
//         } catch (err) {
//
//         }
//       })
//     }
//   }
//
// export default {
//   data () {
//     return {
//       msg: 'Welcome to Your Vue.js App',
//       input: '# hello',
//       test: '1'
//     }
//   },
//   computed: {
//     compiledMarkdown: () => {
//       // alert('comp' + this.input);
//       return this.test;
//     }
//   },
//   methods: {
//     update: (e) => {
//       // alert(e.target.value);
//       this.test = e.target.value;
//     },
//     save: () => {
//       const file = {
//         text: 'text'
//       };
//       // axios.post(url, file).then(response => {
//       //   console.log(response);
//       // })
//
//       alert(axios.get(url));
//     }
//   }
// }
</script>

<style>

</style>
