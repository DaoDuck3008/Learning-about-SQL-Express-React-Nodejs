import express from "express";
import {
  handleHelloWorld,
  getCreateUserPage,
  handleCreateNewUser,
} from "../controllers/homecontroller";
const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", handleHelloWorld);
  router.get("/createUser", getCreateUserPage);
  router.post("/users/create-user", handleCreateNewUser);
  return app.use("/", router);
};

export default initWebRoutes;
