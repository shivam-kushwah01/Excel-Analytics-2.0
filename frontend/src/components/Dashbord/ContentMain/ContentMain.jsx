import "./ContentMain.css";


import EditedUsers from "../EditedUsers/EditedUsers";
import UnEditedUsers from "../UnEditedUsers/UnEditedUsers";
import Users from "../Users/UserList";
import DeleteUsers from "../DeletedUsers/DeletedUsers";
import TotalUsers from "../TotalUsers/TotalUsers";

const ContentMain = () => {
  return (
    <div className="main-content-holder">
        <div className="content-grid-one">
            <TotalUsers />
            <EditedUsers />
            <UnEditedUsers />
            <DeleteUsers />
        </div>
        <div className="content-grid-two">
              <div className="subgrid-two">
                <Users />
              </div>
        </div>
    </div>
  )
}

export default ContentMain
