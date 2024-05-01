const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

const client = new MongoClient(process.env.MONGODB_URI);

async function connectToMongo() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}
connectToMongo();

app.get("/", (req, res) => {
  res.send("Yupp server is running!🎉");
});

app.get("/hackathons", async (req, res) => {
  try {
    const db = client.db("HackHive");
    const collection = db.collection("hackathon");
    const hackathons = await collection.find().toArray();
    res.json(hackathons);
  } catch (err) {
    console.error("Error fetching hackathons:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
