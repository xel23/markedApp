const express = require ('express');
const mongodb = require('mongodb');

const router = express.Router();

router.get('/', async (req, res) => {
  const file = await loadFiles();
  const data = await file.find({}).toArray();
  res.send(data);
});

router.get('/:id', async (req, res) => {
  const file = await loadFiles();
  const data = await file.find({ _id: new mongodb.ObjectID(req.params.id)}).toArray();
  res.send(data);
});


router.post('/', async (req, res) => {
  const file = await loadFiles();
  await file.insertOne(req.body)
    .then(() => {
    res.json('got');
  })
    .catch(err => {
      console.error(err);
    });
});

router.put('/:id', async (req, res) => {
  const file = await loadFiles();
  const newvalues = { $set: {name: req.body.name, age: req.body.age } };
  file.updateOne({ _id: new mongodb.ObjectID(req.params.id) }, newvalues)
    .then(() => {
      res.json({
        status: 'updated'
      })
    })
    .catch(err => {
    console.error(err);
  })
});

router.delete('/:id', async (req, res) => {
  console.log(req.params.id);
  const file = await loadFiles();
  await file.deleteOne({ _id: new mongodb.ObjectID(req.params.id) })
    .then(() => {
      res.status(200).json({
        status: 'deleted'
      })
    })
    .catch(err => {
      console.error(err);
    })
});

async function loadFiles() {
  const client = await mongodb.MongoClient.connect("mongodb://localhost:27017/", {useNewUrlParser: true});
    // .then(db => console.log('DB is started'))
    // .catch(err => console.error(err));
  return client.db('lab').collection('test');
}

module.exports = router;
