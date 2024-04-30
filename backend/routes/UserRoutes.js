import express from "express";
import {
  CreateNewUser,
  DeleteUser,
  GetAllUsers,
  GetOneUser,
  UpdateUser,
} from "../controllers/UserControllers.js";

const router = express.Router();

//   GetAllUsers
router.get("/", GetAllUsers);

//   GetOneUser
router.get("/:id", GetOneUser);

//   CreateNewUser
router.post("/create", CreateNewUser);

//    UpdateUser
router.put("/update/:id", UpdateUser);

//    DeletedUser
router.delete("/delete/:id", DeleteUser);

export default router;
