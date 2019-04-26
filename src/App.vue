<template>
  <div class="container-fluid mt-5" id="app">
    <div class="row">
      <div class="col-5 m-auto">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Input text</span>
          </div>
          <textarea class="form-control" aria-label="With textarea" rows="14" v-model="file.text"
                    ></textarea>
        </div>
      </div>
      <div class="col-5">
        <div class="pre-scrollable" v-html="compiledMarkdown"></div>
      </div>
      <div class="col-2 m-auto">
        <ul class="list-group">
          <li v-for="file in files" class="list-group-item">{{ file.name }}
          <br><button class="btn btn-danger mr-2" @click="deleteFile" :id="file._id">Delete</button>
              <button class="btn btn-primary" @click="openFile" :id="file._id">Open</button></li>
        </ul>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-4">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Name</span>
          </div>
          <input type="text" class="form-control" :placeholder="file.name" v-model="file.name"
                 aria-label="Username" aria-describedby="basic-addon1">
        </div>
      </div>
      <div class="col-1">
        <button v-if="su == 'Save'" class="btn btn-success" @click="postFile">{{ su }}</button>
        <button v-else class="btn btn-success" @click="updateFile">{{ su }}</button>
      </div>
    </div>
  </div>
</template>

<script>

  const marked = require('marked');

  export default {
    data () {
      return {
        file: {
          name: 'Name',
          text: '# hello',
          date: new Date()
        },
        files: [],
        su: 'Save',
        curID: ''
      }
    },
    created () {
      this.getList();
    },
    computed: {
      compiledMarkdown() {
        return marked(this.file.text, { sanitize: true });
      }
    },
    methods: {
      getList() {
        fetch('http://localhost:3000/api/files/')
          .then(res => res.json())
          .then(data => {
            this.files = data;
          })
          .catch(err => {
            console.error(err);
          });
      },
      postFile() {
        fetch('http://localhost:3000/api/files/', {
          method: 'POST',
          body: JSON.stringify(this.file),
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            this.getList();
          })
          .catch(err => console.error(err));
      },
      updateFile(e) {
        fetch(`http://localhost:3000/api/files/${this.curID}`, {
          method: 'PUT',
          body: JSON.stringify(this.file),
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            this.getList();
          })
          .catch(err => console.error(err));
      },
      deleteFile(e) {
        fetch(`http://localhost:3000/api/files/${e.target.id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            this.file.name = 'Name';
            this.file.text = '# hello';
            this.su = 'Save';
            this.curID = '';
            this.getList();
          })
          .catch(err => console.error(err));
      },
      openFile(e) {
        fetch(`http://localhost:3000/api/files/${e.target.id}`)
          .then(res => res.json())
          .then(data => {
            this.file.text = data[0].text;
            this.file.name = data[0].name;
            this.su = 'Update';
            this.curID = data[0]._id;
          })
      }
    }
  }
</script>
