import React, { useState } from "react";
import PostItem from "../Post/PostItem";

export default function Middle({ posts }) {

  return (
    <div>
      {posts &&
        posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
    </div>
  );
}
