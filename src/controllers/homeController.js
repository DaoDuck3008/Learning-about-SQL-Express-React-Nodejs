const { CreateUser } = require("../service/CRUDservice");
import pool from "../configs/database";

const handleHelloWorld = (req, res) => {
  return res.render("home.ejs");
};

const getCreateUserPage = (req, res) => {
  return res.render("user.ejs");
};

const handleCreateNewUser = async (req, res) => {
  const { email, password, username } = req.body;
  console.log(">>> check user: ", email, password, username);
  const results = await CreateUser(email, password, username);
  return res.send("Created an user");
};

module.exports = {
  handleHelloWorld,
  getCreateUserPage,
  handleCreateNewUser,
};
