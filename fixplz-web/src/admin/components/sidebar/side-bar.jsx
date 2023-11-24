import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import "../../assets/scss/admin-sidebar.scss";

const menuContent = [
  {
    name: "메인",
    route: "/admin/main",
  },
  {
    name: "대시보드",
    route: "/admin/dashboard",
  },
  {
    name: "시설물",
    route: "/admin/facility",
  },
  {
    name: "민원",
    route: "/admin/complaint",
  },
];

const SideBar = () => {
  const [isLogined, setIsLogined] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("/admin/main");
  const history = useNavigate();

  useEffect(() => {
    const jwt = localStorage.getItem("login");
    if (jwt) {
      setIsLogined(true);
    }
  }, []);

  return (
    <>
      {/* <div className="admin-sidebar"> */}
      <div className="admin-sidebar-container">
        <div className="admin-logo-div">
          <Link to="/" title="Home" className="logo-Link">
            <img
              src={process.env.PUBLIC_URL + "/assets/imgs/whitelogo.png"}
              className="admin-logo-img"
            />
          </Link>
        </div>
        <ul className="admin-sidebar-menu_wrapper">
          {menuContent.map((item, i) => (
            <Link
              to={item.route}
              key={i}
              onClick={() => setSelectedMenu(item.route)}
            >
              <li className={selectedMenu === item.route ? "selected" : ""}>
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
        <div className="admin-sidebar-menu_btns">
          {isLogined === true ? (
            <button className="logout">로그아웃</button>
          ) : (
            <button
              className="logout"
              onClick={() => {
                history("/admin/login");
              }}
            >
              로그인
            </button>
          )}
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
export default SideBar;
