import express from "express";
import { getAllFeed, getUserPost, loggedUserPost } from "../controllers/postController.js";
import { isAuthenticate } from "../middleware/authentication.js";

const router = express.Router();

router.route("/getAllFeed").get(getAllFeed);
router.route("/:userId/allPosts").get(isAuthenticate, getUserPost);
router.route('/getPostMe').get(isAuthenticate, loggedUserPost)

export default router;
