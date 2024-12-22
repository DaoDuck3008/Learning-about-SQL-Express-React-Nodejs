import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser";
require("dotenv").config();
import connection from "./config/connectDB";

const app = express();

//config view engine
configViewEngine(app);

//config body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// test connection
connection();
//init web routes
initWebRoutes(app);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(">>> Running on port: ", PORT);
});
