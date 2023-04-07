import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import asyncHandler from "express-async-handler";

//Register
export const register = asyncHandler(async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    password,
    picturePath,
    friends,
    location,
    occuption,
  } = req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !picturePath ||
    !location ||
    !occuption
  ) {
    return res.status(501).json({
      success: false,
      message: "Please fill all data ",
    });
  }

  const salt = await bcrypt.genSalt();
  const hasedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    firstName,
    lastName,
    email,
    password: hasedPassword,
    picturePath,
    friends,
    location,
    occuption,
    viwedProfile: Math.floor(Math.random() * 1000),
    impression: Math.floor(Math.random() * 1000),
  });

  const savedUser = await newUser.save();

  if (!savedUser) {
    res.status(501).json({
      success: false,
      message: "Error ",
    });
  }

  res.status(201).json({
    success: true,
    message: "User Created",
    savedUser,
  });
});

//Login
export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: "Invlaid credentatial" });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRETE, {
    expiresIn: process.env.JWT_EXPIREIN,
  });

  res.cookie("token", token, {
    expires: new Date(Date.now() + 2589200000),
    httpOnly: true,
  });

  res
    .status(200)
    .json({ success: true, message: "Loggod in", token: token, user });
});

export const about = asyncHandler(async (req, res) => {
  const user = req.user;

  res.status(201).json({ message: "About Page", user });
});

//get user
export const getUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);

  if (!user) {
    return res.status(404).send({
      message: "User not Found",
    });
  }

  res.status(200).send({
    message: "User Found",
    user,
  });
});

//Get user friend
export const getUserFriend = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);

  if (!user) {
    return res.status(404).send({
      message: "User not Found",
    });
  }

  const friends = await Promise.all(
    user.friends.map((id) => User.findById(id))
  );
  const formattedFriends = friends.map(
    ({ _id, firstName, lastName, occupation, location, picturePath }) => {
      return { _id, firstName, lastName, occupation, location, picturePath };
    }
  );
  res.status(200).json(formattedFriends);
});

//Update userFriend
export const addDeleteFriend = asyncHandler(async (req, res) => {
  const { id, friendId } = req.params;
  const user = await User.findById(id);
  const friend = await User.findById(friendId);

  if (user.friends.includes(friendId)) {
    user.friends = user.friends.filter((id) => id !== friendId);
    friend.friends = friend.friends.filter((id) => id !== id);
  } else {
    user.friends.push(friendId);
    friend.friends.push(id);
  }
  await user.save();
  await friend.save();

  const friends = await Promise.all(
    user.friends.map((id) => User.findById(id))
  );
  const formattedFriends = friends.map(
    ({ _id, firstName, lastName, occupation, location, picturePath }) => {
      return { _id, firstName, lastName, occupation, location, picturePath };
    }
  );

  res.status(200).json(formattedFriends);
});
