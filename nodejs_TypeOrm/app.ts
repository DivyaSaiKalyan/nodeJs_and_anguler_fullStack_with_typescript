import express from "express";
import AppDataSource from "./src/config/typrOrm.config";
import bodyParser from "body-parser";
import router from "./src/Routes/user.routes";
import cors from "cors";

AppDataSource.initialize().then(() => {
  const app = express();

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
    res.header(
      "Access-Control-Allow-Headers",
      "Content-Type, x-requested-with"
    );
    next(); // Important
  });
  app.use(bodyParser.json());

  app.use(router);
  app.use(express.json());
  app.use(cors());

  app.listen(3010, "localhost", () => {
    console.log("server is running at port 3010.....");
  });
});
