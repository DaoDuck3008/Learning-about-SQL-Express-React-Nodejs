import express from "express";
import apiController from "../controllers/apicontroller";
const router = express.Router();

const initApiRoutes = (app) => {
  //rest api
  // GET - r, POST - c, PUT - u, DELETE d
  // CRUD
  router.get("/test-api", apiController.testApi);
  router.post("/register", apiController.register);

  return app.use("/api/v1/", router);
};

export default initApiRoutes;
