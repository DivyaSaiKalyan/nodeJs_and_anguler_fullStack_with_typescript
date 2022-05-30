"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../Controller/user.controller");
const router = express_1.default.Router();
//post data to mysql database by using typeorm
router.post("/userDetails", user_controller_1.createUser);
//get data from mysql database by using typeorm
router.get("/getUsers", user_controller_1.getUser);
//get data by id from mysql database by using typeorm
router.get("/usersById/:id", user_controller_1.getUserById);
//delete data by id from mysql database by usinng typeorm
router.delete("/deleteUser/:id", user_controller_1.deleteUser);
//user modify from mysql database by using typeorm
router.put("/modifyUser/:id", user_controller_1.modifyUser);
exports.default = router;
//# sourceMappingURL=user.routes.js.map