import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaComment, FaHeart, FaShareAlt } from "react-icons/fa";

export default function PostItem({ post }) {
  const [showComment, setShowComment] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="my-4 mx-2 top-div" key={post._id}>
      <div
        style={{
          zIndex: "10",
          background: "transparent",
          position: "absolute",
          backgroundColor: "rgb(240, 234, 234)",
          width: "26.3%",
          opacity: "0.5",
          height: "60px",
        }}
      ></div>
      <Link
        to={`/user-profile/${post.userId}`}
        style={{
          opacity: "1",
          position: "absolute",
          zIndex: "11",
          display: "flex",
        }}
        className="link"
      >
        <img
          src={`http://localhost:3001/assets/${post.userPicturePath}`}
          height={50}
          width={50}
          className="mx-4 my-1"
          style={{ borderRadius: "50%" }}
          alt=""
        />

        <h5 style={{ marginTop: "16px", float: "left" }}>
          <b>{post.firstName + " " + post.lastName}</b>
        </h5>
      </Link>
      <img
        src={`http://localhost:3001/assets/${post.picturePath}`}
        height={"600"}
        width={"400"}
        style={{ borderRadius: "5px" }}
        alt=""
      />

      <div
        style={{
          zIndex: "10",
          background: "transparent",
          position: "absolute",
          backgroundColor: "rgb(240, 234, 234)",
          width: "26.3%",
          opacity: "0.5",
          height: "60px",
          marginTop: "-60px",
        }}
      />
      <div
        className="d-flex mx-4"
        style={{ position: "absolute", marginTop: "-40px", zIndex: "14" }}
      >
        <FaHeart
          color={`${isLiked ? "red" : "white"}`}
          style={{ cursor: "pointer" }}
          onClick={() => setIsLiked(!isLiked)}
          size="1.8em"
        />
        <FaComment
          color={`${showComment ? "red" : "white"}`}
          size="1.8em"
          className="mx-3"
          style={{ cursor: "pointer" }}
          onClick={() => setShowComment(!showComment)}
        />
        <FaShareAlt
          color="white"
          style={{ cursor: "pointer" }}
          onClick={() => alert("Funcnality comming soon")}
          size="1.8em"
        />
      </div>
      {showComment &&
        post.comments &&
        post.comments.map((comment, index) => <div key={index}>{comment}</div>)}
    </div>
  );
}
