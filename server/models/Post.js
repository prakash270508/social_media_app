import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  userId: {
    type: String,
    reqired: true,
  },
  firstName: {
    type: String,
    reqired: true,
  },
  lastName: {
    type: String,
    reqired: true,
  },
  location : String,
  description : String,
  picturePath : String,
  userPicturePath : String,
  like : {
    type : Map,
    of : Boolean,
  },
  comments : {
    type : Array,
    default : []
  }
}, {timestamps: true});

const Post = mongoose.model("Post", postSchema);
export default Post;
