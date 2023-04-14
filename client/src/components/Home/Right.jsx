import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allUsers } from "../../Redux/services/userService";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Right() {
  const { users } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allUsers());
  }, []);

  return (
    <div style={{ marginTop: "4vh" }}>
      {users &&
        users.map((user) => (
          <div key={user._id} className="my-3 d-flex">
            <Link className="link d-flex" to={`/user-profile/${user._id}`}>
              <img
                src={
                  user.picturePath
                    ? `http://localhost:3001/assets/${user.picturePath}`
                    : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                height={50}
                width={52}
                style={{ borderRadius: "50%" }}
                alt=""
              />
              <h6 className="my-3 mx-2">
                <b>{user.firstName + " " + user.lastName}</b>
              </h6>
            </Link>
            <FaPlusCircle
              style={{
                marginTop: "19px",
                marginLeft: "5px",
                cursor: "pointer",
              }}
              onClick={() => console.log("Clicked")}
            />
          </div>
        ))}
    </div>
  );
}
