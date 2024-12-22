import express from "express";
import {
  handleHelloWorld,
  getCreateUserPage,
  handleCreateAnUser,
  handleDeleteAnUser,
} from "../controllers/homecontroller";
const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", handleHelloWorld);
  router.get("/user", getCreateUserPage);
  router.post("/users/create-user", handleCreateAnUser);
  router.post("/user/delete-user/:id", handleDeleteAnUser);
  return app.use("/", router);
};

export default initWebRoutes;
