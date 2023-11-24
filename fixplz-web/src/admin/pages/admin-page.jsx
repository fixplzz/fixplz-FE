import React, { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
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
    }
  };

  useEffect(() => {
    access();
  }, []);
  return (
    <>
      <div className="admin-page-container">
        <div className="admin-page-sidebar">
          <SideBar />
        </div>
        <div className="admin-page-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default AdminPage;
