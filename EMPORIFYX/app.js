const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");






const MONGO_URL = "mongodb://127.0.0.1:27017/EmporifyX";

main().then(() => {
    console.log("connected to DB");
  }).catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}



app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    res.send("Hey I am Root")
});

app.get("/testing", async(req, res)=>{
    let newListing = new Listing({
        title: "T-shirt",
        description: "Sample",
        price: 255,
        size: "Large",
        color: "Black",
        rating: 5,
    })

    await newListing.save();
    console.log("save was successful");
    res.send("testing successful");
})

app.listen(8080, () => {
    console.log("server is listening to port 8080");
  });