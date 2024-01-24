const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors")
app.use(express.json())
app.use(cors())


const connectToDatabase = async function () {
try {
await mongoose.connect('mongodb+srv://admin:admin@database.niqrpzq.mongodb.net/?retryWrites=true&w=majority');
console.log('Connected to MongoDB');
} catch (error) {
console.error('Error connecting to MongoDB:', error);
}
}

// module.exports = connectToDatabase
// let connectToDatabase = require("./connectDb")
let users = require("./src/routes/users");
let books = require("./src/routes/books")

app.use("/users", users);
app.use("/books", books);

// mongoose.set("strictQuery", false);
// connectToDatabase();

app.get('/', (req, res) => {
res.send("Hello World....");
});

app.listen(8000,()=>{
connectToDatabase()
console.log("Server is running on port 8000...")
})