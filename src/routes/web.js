import express from "express";
import homeController from "../controllers/homecontroller";
import apiController from "../controllers/apicontroller";
const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", homeController.handleHelloWorld);
  router.get("/user", homeController.getCreateUserPage);
  router.post("/user/create-user", homeController.handleCreateAnUser);
  router.post("/user/delete-user/:id", homeController.handleDeleteAnUser);
  router.get("/user/update-user/:id", homeController.getUpdateUserPage);
  router.post("/user/update-user", homeController.handleUpdateAnUser);

  //rest api
  // GET - r, POST - c, PUT - u, DELETE d
  // CRUD
  router.get("/api/test-api", apiController.testApi);

  return app.use("/", router);
};

export default initWebRoutes;
