"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "sqluser",
    password: "root",
    database: "nodewithtypeorm",
    entities: [__dirname + "/../**/*.entity.{js,ts}"],
    logging: false,
    synchronize: true,
});
exports.default = AppDataSource;
//# sourceMappingURL=typrOrm.config.js.map