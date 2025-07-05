import { useState, useEffect } from "react";
import axios from "axios";
import { iconsImgs } from "../utils/images";

import "./EditedUsers.css";

const EditedUsers = () => {
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    fetchTotalUsers();
  }, []);

  const fetchTotalUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/userscrud"); // Adjust if needed
      setTotalUsers(res.data.length); // ✅ Count the users
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="grid-one-item grid-common grid-c2">
      <div className="grid-c-title">
        {/* <p>Total Records</p>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} />
        </button> */}
      </div>

      <div className="grid-box2">
        <img src={iconsImgs.usersavatar} />
        <span className="lg-value"> Edited Usres<br></br> <br></br>  {totalUsers}</span> {/* ✅ Dynamic user count */}
      </div>
      <br />
      
    </div>
  );
};

export default EditedUsers;
