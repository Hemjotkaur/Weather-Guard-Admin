import express from "express";
import { getUser } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post("/login", getUser);

export default userRouter;
