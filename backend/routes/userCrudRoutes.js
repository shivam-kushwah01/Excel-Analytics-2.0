const express = require("express");
const router = express.Router();
const { User } = require("../models/user");

// GET all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// POST add user
router.post("/", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send({ message: "User added", newUser });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// PUT update user
router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send({ message: "User updated", updatedUser });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// DELETE user
router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send({ message: "User deleted" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
