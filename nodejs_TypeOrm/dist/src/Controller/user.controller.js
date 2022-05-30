"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modifyUser = exports.deleteUser = exports.getUserById = exports.getUser = exports.createUser = void 0;
const user_entity_1 = require("../../src/Entities/user.entity");
const typrOrm_config_1 = __importDefault(require("../config/typrOrm.config"));
//mysql repository
const userRepository = typrOrm_config_1.default.getRepository(user_entity_1.User);
//create user
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new user_entity_1.User();
    const userdata = yield Object.assign(user, req.body);
    const result = yield userRepository.save(userdata);
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.send(result);
});
exports.createUser = createUser;
//get user
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield userRepository.find();
    res.header("Access-Control-Allow-Origin", "*");
    res.send(result);
});
exports.getUser = getUser;
//getuserbyId
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield userRepository.findOne({
        where: { id: Number(req.params.id) },
    });
    res.header("Access-Control-Allow-Origin", "*");
    res.send(result);
});
exports.getUserById = getUserById;
//delete user
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield userRepository.delete({ id: Number(req.params.id) });
    res.header("Access-Control-Allow-Origin", "*");
    res.send("user deleted succsfully");
});
exports.deleteUser = deleteUser;
//modify user
const modifyUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new user_entity_1.User();
    const modifyData = yield Object.assign(user, req.body);
    const result = yield userRepository.update({ id: Number(req.params.id) }, modifyData);
    res.header("Access-Control-Allow-Origin", "*");
    res.send(result);
});
exports.modifyUser = modifyUser;
//# sourceMappingURL=user.controller.js.map