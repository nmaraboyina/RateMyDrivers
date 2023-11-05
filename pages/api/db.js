// db.js

const { MongoClient } = require("mongodb");

async function connectToDatabase() {
  const uri = process.env.MONGODB_URI; // Use the environment variable provided by Vercel
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db();
    return database;
  } catch (err) {
    console.error(err);
  }
}

module.exports = { connectToDatabase };