const express = require('express')
const dotenv=require('dotenv')
dotenv.config()
const app = express()
const { MongoClient } = require('mongodb');
const bodyparser=require('body-parser')
const cors =require('cors')

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'savepass';
const port = 3000
app.use(bodyparser.json())
app.use(cors())

client.connect();
//get alll passwords
app.get('/', async (req, res) => {
  const db=client.db(dbName)
  const collection = client.db().collection('passwords');
  const findResult = await collection.find({}).toArray();
  res.json(findResult)
})

//save passwords
app.post('/', async (req, res) => {
  const password=req.body
  const db=client.db(dbName)
  const collection = client.db().collection('passwords');
  const findResult = await collection.insertOne(password);
  res.send({success: true,result:findResult})
})

//delete passwords
app.delete('/', async (req, res) => {
  const password=req.body
  const db=client.db(dbName)
  const collection = client.db().collection('collection');
  const findResult = await collection.deleteOne(password);
  res.send({success: true,result:findResult})
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})