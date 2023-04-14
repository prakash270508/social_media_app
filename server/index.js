import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoute.js";
import postRoute from "./routes/postRoute.js";
import { isAuthenticate } from "./middleware/authentication.js";
import { createPost } from "./controllers/postController.js";
import { users, posts } from "./data/index.js";
// import User from "./models/User.js";
// import Post from "./models/Post.js";
import { register } from "./controllers/userController.js";

//Configuration
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cookieParser());

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(
  cors({
    origin: "http://127.0.0.1:5173",
  })
);
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

//File storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

//Routes

app.post("/posts", isAuthenticate, upload.single("picturePath"), createPost);
app.post("/regiser", upload.single("picturePath"), register);

app.use("/user", userRoutes);
app.use("/posts", postRoute);

//Mongoose set up

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // One Time Insert
    // User.insertMany(users)
    // Post.insertMany(posts)
    app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
  })
  .catch((err) => console.log("Not connected"));
