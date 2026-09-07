import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import "./MainLayouts.css"
import { useLocation } from "react-router-dom";
import InsightsHeader from "../components/Header/InsightsHeader/InsightsHeader";
import ChatHeader from "../components/Header/ChatHeader/ChatHeader";

function MainLayout() {
  let location = useLocation();

  const locations = ["/insights"];

  const isSpecialPage = locations.includes(location.pathname);

  return (
    <>
      <div className="app">
        <Sidebar />

        <div className="main">
          {isSpecialPage ? <InsightsHeader /> : <ChatHeader />}

          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainLayout