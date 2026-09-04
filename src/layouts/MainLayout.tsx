import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import "./MainLayouts.css"

function MainLayout() {
  return (
    <>
      <div className="app">
        <Sidebar />

        <div className="main">
          <Header />

          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainLayout