import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import ProfileMenu from "../components/ProfileMenu/ProfileMenu";
import "./MainLayouts.css"

function MainLayout() {
  return (
    <>
      <input type="radio" name="ui-panel" id="ui-idle" className="ui-radio" defaultChecked />
      <input type="radio" name="ui-panel" id="ui-profile" className="ui-radio" />
      <input type="radio" name="ui-panel" id="ui-settings" className="ui-radio" />
      <div className="app">
        <Sidebar />
        <div className="main">
          <Outlet />
        </div>
      </div>
      <ProfileMenu />
    </>
  );
}

export default MainLayout
