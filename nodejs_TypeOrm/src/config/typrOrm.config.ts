import { DataSource } from "typeorm";
const AppDataSource = new DataSource({
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

export default AppDataSource;
