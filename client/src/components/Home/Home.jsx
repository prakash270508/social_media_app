import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allPosts } from "../../Redux/services/postService";
import Loader from "../Loader/Loader";
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";

export default function Home() {
  const { isLoading, allPostsList } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allPosts());
  }, []);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="row">
            <div className="col-3" style={{ backgroundColor: "#fefcfc" }}>
              <Left />
            </div>
            <div className="col-6">
              <Middle posts={allPostsList} />
            </div>
            <div className="col-3" style={{ backgroundColor: "#fefcfc" }}>
              <Right />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
