import mongoose from "mongoose";
import jwt from 'jsonwebtoken'

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 20,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    picturePath: {
      type: String,
      default: "",
    },
    friends: {
      type: Array,
      default: [],
    },
    location: String,
    occuption: String,
    viwedProfile: Number,
    impression: Number,
  },
  { timestamps: true }
);

userSchema.methods.geJWTtoken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRETE, {
    expiresIn: process.env.JWT_EXPIREIN,
  });

  return token;
};

const User = mongoose.model("User", userSchema);

export default User;
