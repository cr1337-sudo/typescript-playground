import { Router } from "express";
const router = Router();
import {createUser, deleteUser, getUser, getUsers, updateUser} from "../controllers/user.controller"

router.get("/", getUsers)
router.get("/:id", getUser)
router.post("/", createUser)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser )

export default router;
