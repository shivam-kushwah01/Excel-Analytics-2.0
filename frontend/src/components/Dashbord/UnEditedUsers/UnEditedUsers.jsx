import { useState, useEffect } from "react";
import axios from "axios";
import { iconsImgs } from "../utils/images";

import "./UnEditedUsers.css";

const UnEditedUsers = () => {
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
    <div className="grid-one-item grid-common grid-c3">
      <div className="grid-c-title">
       
      </div>

      <div className="grid-box3">
        <img src={iconsImgs.users} />
        <span className="lg-value"> UnEdited Usres<br></br> <br></br>  {totalUsers}</span> {/* ✅ Dynamic user count */}
      </div>
      <br />
      
    </div>
  );
};

export default UnEditedUsers;
