const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/users");

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ $or: [{ username }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Nom d'utilisateur ou email déjà utilisé" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword
    });

    await newUser.save();

    res.status(201).json({ message: "Utilisateur créé avec succès" });
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur:", error);
    res
      .status(500)
      .json({ message: "Erreur lors de la création de l'utilisateur" });
  }
});

module.exports = router;
