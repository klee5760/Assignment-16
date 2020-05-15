const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.envMONGODB_URI ||
    "mongodb://localhost/googlebooks"

);

db.Book.remove({})
.then(() => db.Book.collectioninsertMany(bookSeed))
.then(data => {
    console.log(data.result.n + "records inserted!");
    process.exit(0);
})
.catch(err => {
    console.log(err);
    process.exit(1);
});