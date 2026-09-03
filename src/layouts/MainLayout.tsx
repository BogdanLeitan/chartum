import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import "./MainLayouts.css"

function MainLayout({ children }: any) {
  return (
    <>
      <div className="app">
        <Sidebar />

        <div className="main">
          <Header />

          <div className="content">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainLayout