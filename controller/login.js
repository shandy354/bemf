const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const users = require("../models").User;
module.exports = {
  createUser: async (req, res) => {
    const { username, password } = req.body;
    hashedPasword = await bcrypt.hash(password, 10);
    const user = await users
      .create({
        username,
        password: hashedPasword,
      })
      .then((user) => {
        return res.status(201).json({
          message: "User created successfully",
          user,
        });
      })
      .catch((err) => {
        res.status(402).json({ err });
      });
  },

  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      console.log(req.body);
      const user = await users.findOne({
        where: { username: username },
      });

      if (!user) {
        return res.status(404).json({
          message: "User Game not found",
        });
      }
      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (!isPasswordMatch) {
        return res.status(400).json({
          message: "Password not match",
        });
      }
      const token = await jwt.sign({ username }, "13wertryty45t4rfy", {
        expiresIn: "100000",
      });
      res.json({
        user: user,
        token,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
};
