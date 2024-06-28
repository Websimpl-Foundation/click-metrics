require('dotenv').config();
const express = require("express");
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./src/routes/url");
const URL = require("./src/models/url");
const cors = require("cors");

const firebaseAdmin = require("./src/Firebase/firebase"); // Import Firebase Admin SDK
const { getAuth } = require("firebase-admin/auth");





const app = express();
const PORT = 8001;

connectToMongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("MongoDB connected")
);

app.use(express.json());
app.use(cors());

app.use("/url", urlRoute);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    },
    { new: true }
  );
  if (entry) {
    res.redirect(entry.redirectURL);
  } else {
    res.status(404).json({ error: "URL not found" });
  }
});


//authetication code
const router=require("./src/routes/auth-router")

app.use("/api/auth",router)

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
