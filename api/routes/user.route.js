import express from "express";
import { deleteUserUser, getUser, getUsers, updateUserUser } from "../controllers/user.controller.js";
import {verifyToken} from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", verifyToken, getUser);

router.put("/:id", verifyToken, updateUserUser);
router.delete("/:id", verifyToken, deleteUserUser);


export default router;