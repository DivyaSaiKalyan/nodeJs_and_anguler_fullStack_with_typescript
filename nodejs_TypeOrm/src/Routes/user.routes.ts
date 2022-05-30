import express from "express";
import {
  createUser,
  getUser,
  getUserById,
  deleteUser,
  modifyUser,
} from "../Controller/user.controller";

const router = express.Router();

//post data to mysql database by using typeorm
router.post("/userDetails", createUser);

//get data from mysql database by using typeorm
router.get("/getUsers", getUser);

//get data by id from mysql database by using typeorm
router.get("/usersById/:id", getUserById);

//delete data by id from mysql database by usinng typeorm
router.delete("/deleteUser/:id", deleteUser);

//user modify from mysql database by using typeorm
router.put("/modifyUser/:id", modifyUser);

export default router;
