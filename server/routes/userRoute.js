import express from "express";
import { isAuthenticate } from "../middleware/authentication.js";
import {
  register,
  login,
  about,
  getUser,
  getUserFriend,
  addDeleteFriend,
} from "../controllers/userController.js";

const router = express.Router();

//Auth
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/about").get(isAuthenticate, about);

//User
router.route("/:id").get(isAuthenticate, getUser);
router.get("/:id/friends", isAuthenticate, getUserFriend);

/* UPDATE */
router.patch("/:id/:friendId", isAuthenticate, addDeleteFriend);

export default router;
