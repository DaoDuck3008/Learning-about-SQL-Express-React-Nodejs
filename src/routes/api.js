import express from "express";
import apiController from "../controllers/apicontroller";
import userController from "../controllers/userController";
const router = express.Router();

const initApiRoutes = (app) => {
  //rest api
  // GET - r, POST - c, PUT - u, DELETE d
  // CRUD
  router.get("/test-api", apiController.testApi);
  router.post("/register", apiController.register);
  router.post("/login", apiController.login);

  router.get("/user/read", userController.readFunc);
  router.post("/user/create", userController.createFunc);
  router.put("/user/update", userController.updateFunc);
  router.delete("/user/delete", userController.deleteFunc);

  return app.use("/api/v1/", router);
};

export default initApiRoutes;
