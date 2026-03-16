const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/project3")
.then(() => console.log("Database connected"))
.catch(err => console.log(err));

// Schema
const userSchema = new mongoose.Schema({
name: String,
email: String
});

const User = mongoose.model("User", userSchema);

// GET users
app.get("/users", async (req, res) => {

const users = await User.find();

res.json({
message: "Users fetched successfully",
data: users
});

});

// POST user
app.post("/users", async (req, res) => {

const { name, email } = req.body;

// validation check before saving to database
if (!name || !email) {
return res.status(400).json({
message: "Name and Email required"
});
}

const newUser = new User({
name,
email
});

await newUser.save();

res.status(201).json({
message: "User saved in database",
data: newUser
});

});

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});