import CRUDservice from "../service/CRUDservice";
import pool from "../configs/database";

const handleHelloWorld = (req, res) => {
  return res.render("home.ejs");
};

const getCreateUserPage = async (req, res) => {
  const listUser = await CRUDservice.printListUser();
  return res.render("user.ejs", { listUser: listUser });
};

const handleCreateNewUser = async (req, res) => {
  const { email, password, username } = req.body;
  await CRUDservice.CreateUser(email, password, username);
  return res.send("Create a new user!!!");
};

module.exports = {
  handleHelloWorld,
  getCreateUserPage,
  handleCreateNewUser,
};
