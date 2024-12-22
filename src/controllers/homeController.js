import CRUDservice from "../service/CRUDservice";

const handleHelloWorld = (req, res) => {
  return res.render("home.ejs");
};

const getCreateUserPage = async (req, res) => {
  const listUser = await CRUDservice.printListUser();
  return res.render("user.ejs", { listUser: listUser });
};

const handleCreateAnUser = async (req, res) => {
  const { email, password, username } = req.body;
  await CRUDservice.createUser(email, password, username);
  return res.redirect("/user");
};

const handleDeleteAnUser = async (req, res) => {
  const id = req.params.id;
  await CRUDservice.deleteUser(id);
  return res.redirect("/user");
};

module.exports = {
  handleHelloWorld,
  getCreateUserPage,
  handleCreateAnUser,
  handleDeleteAnUser,
};
