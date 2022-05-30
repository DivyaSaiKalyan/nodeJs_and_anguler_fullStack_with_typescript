import { User } from "../../src/Entities/user.entity";
import { Request, Response } from "express";
import AppDataSource from "../config/typrOrm.config";

//mysql repository
const userRepository = AppDataSource.getRepository(User);

//create user
export const createUser = async (req: Request, res: Response) => {
  const user = new User();

  const userdata = await Object.assign(user, req.body);

  const result = await userRepository.save(userdata);
  res.setHeader("Access-Control-Allow-Origin", "*");
  return res.send(result);
};

//get user
export const getUser = async (req: Request, res: Response) => {
  const result = await userRepository.find();
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result);
};

//getuserbyId
export const getUserById = async (req: Request, res: Response) => {
  const result = await userRepository.findOne({
    where: { id: Number(req.params.id) },
  });
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result);
};

//delete user
export const deleteUser = async (req: Request, res: Response) => {
  await userRepository.delete({ id: Number(req.params.id) });
  res.header("Access-Control-Allow-Origin", "*");
  res.send("user deleted succsfully");
};

//modify user
export const modifyUser = async (req: Request, res: Response) => {
  const user = new User();
  const modifyData: User = await Object.assign(user, req.body);
  const result = await userRepository.update(
    { id: Number(req.params.id) },
    modifyData
  );
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result);
};
