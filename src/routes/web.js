import express from "express";
import homeController from "../controllers/homecontroller";
const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", homeController.handleHelloWorld);
  router.get("/user", homeController.getCreateUserPage);
  router.post("/user/create-user", homeController.handleCreateAnUser);
  router.post("/user/delete-user/:id", homeController.handleDeleteAnUser);
  router.get("/user/update-user/:id", homeController.getUpdateUserPage);
  router.post("/user/update-user", homeController.handleUpdateAnUser);
  return app.use("/", router);
};

export default initWebRoutes;
