import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allUsers } from "../../Redux/services/userService";

export default function Right() {
  const { users } = useSelector((state) => state.auth);

  console.log(users)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allUsers());
  }, []);

  return (
    <div style={{ marginTop: "4vh"}}>
      {users &&
        users.map((user) => (
          <div key={user._id} className="my-3 d-flex">
            <img
              src={user.picturePath ? `http://localhost:3001/assets/${user.picturePath}` : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'}
              height={50}
              width={55}
              style={{borderRadius:"50%"}}
              alt=""
            />
            <h6 className="my-3 mx-2"><b>{user.firstName + " " + user.lastName}</b></h6>
          </div>
        ))}
    </div>
  );
}
