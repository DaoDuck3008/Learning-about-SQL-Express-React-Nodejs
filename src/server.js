import express from "express";
import configViewEngine from "./config/viewEngine";
import configCors from "./config/configCors";
import initWebRoutes from "./routes/web";
import initApiRoutes from "./routes/api";
import bodyParser from "body-parser";
require("dotenv").config();
import connection from "./config/connectDB";

const app = express();
const PORT = process.env.PORT || 8081;

//config cors
configCors(app);
//config view engine
configViewEngine(app);
//config body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// test connection
connection();

//init web routes
initWebRoutes(app);
// init api routes
initApiRoutes(app);

app.listen(PORT, () => {
  console.log(">>> Running on port: ", PORT);
});
