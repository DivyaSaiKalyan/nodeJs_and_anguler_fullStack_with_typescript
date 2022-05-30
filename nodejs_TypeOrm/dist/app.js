"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const typrOrm_config_1 = __importDefault(require("./src/config/typrOrm.config"));
const body_parser_1 = __importDefault(require("body-parser"));
const user_routes_1 = __importDefault(require("./src/Routes/user.routes"));
const cors_1 = __importDefault(require("cors"));
typrOrm_config_1.default.initialize().then(() => {
    const app = (0, express_1.default)();
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
        res.header("Access-Control-Allow-Headers", "Content-Type, x-requested-with");
        next(); // Important
    });
    app.use(body_parser_1.default.json());
    app.use(user_routes_1.default);
    app.use(express_1.default.json());
    app.use((0, cors_1.default)());
    app.listen(3010, "localhost", () => {
        console.log("server is running at port 3010.....");
    });
});
//# sourceMappingURL=app.js.map