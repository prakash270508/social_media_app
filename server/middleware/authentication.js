import asyncErrorHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const isAuthenticate = asyncErrorHandler(async (req, res, next) => {
    
    const  {token}  = req.cookies;

  if (!token) {
    return res.status(403).json({
      message: "Not authenticate",
    });
  }

  const decodedData = jwt.verify(token, process.env.JWT_SECRETE);

  req.user = await User.findById(decodedData.id);

  next();
});
