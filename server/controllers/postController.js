import Post from "../models/Post.js";
import asyncHandler from "express-async-handler";
import User from "../models/User.js";

export const createPost = asyncHandler(async (req, res) => {
  const { userId, description, picturePath } = req.body;

  const user = await User.findById(userId);

  const newPost = new Post({
    userId,
    description,
    firstName: user.firstName,
    lastName: user.lastName,
    location: user.location,
    userPicturePath: user.picturePath,
    picturePath,
    like: {},
    comments: {},
  });

  await newPost.save();

  res.status(201).json({ success: true, message: "Posted", newPost });
});

//Get all post
export const getAllFeed = asyncHandler(async (req, res) => {
  const post = await Post.find();

  res.status(201).json({ post });
});

//get user post
export const getUserPost = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  const posts = await Post.find({ userId });

  res.status(200).json({ posts });
});

//Get logedd post
export const loggedUserPost = asyncHandler(async (req, res) => {
  const id = req.user._id.toString();

  const posts = await Post.find({ userId: id });

  res.status(200).json({ posts });
});

export const likePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;
  const post = await Post.findById(id);
  const isLiked = post.likes.get(userId);

  if (isLiked) {
    post.likes.delete(userId);
  } else {
    post.likes.set(userId, true);
  }

  const updatedPost = await Post.findByIdAndUpdate(
    id,
    { likes: post.likes },
    { new: true }
  );

  res.status(200).json(updatedPost);
});
