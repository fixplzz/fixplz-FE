import React, { useState } from "react";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { useNavigate, Outlet } from "react-router-dom";
import SideBar from "../components/sidebar/side-bar";
import "../assets/scss/admin-page.scss";

const AdminPage = () => {
  const login = JSON.parse(localStorage.getItem("login"));
  const history = useNavigate();
  const [loading, setLoading] = useState(false);

  const access = () => {
    if (!login) {
      //   history("/admin/login");
      history("/admin/main");
      return;
    } else {
      history("/admin/main");
      return;
    }
  };

  useEffect(() => {
    access();
    setLoading(true);
  }, []);

  return (
    <>
      <HelmetProvider>
        <title>도로 위 성동구 - 관리자 페이지</title>
      </HelmetProvider>
      {loading === true ? (
        <div className="admin-page-container">
          <div className="admin-page-sidebar">
            <SideBar />
          </div>
          <div className="admin-page-content">
            <Outlet />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default AdminPage;
