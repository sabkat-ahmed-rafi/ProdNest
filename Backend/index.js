require("dotenv").config();
const express = require('express')
const cors = require("cors");



const app = express()
const port = process.env.PORT || 5000;

app.use(express.json())




app.use(
    cors({
      origin: ["http://localhost:5173"],
      methods: "GET,PUT,PATCH,POST,DELETE",
      credentials: true,
    })
  );






  
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_KEY}@payswift.6tdsiqc.mongodb.net/?retryWrites=true&w=majority&appName=PaySwift`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {

    const database = client.db("ProdNest");
    const user = database.collection("user");

    

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);








app.get('/', (req, res) => {
  res.send('Hello ProdNest!')
})

app.listen(port, () => {
  console.log(`ProdNest app listening on port ${port}`)
})