import React from "react";
import "./admin.css";
import "./_topbar.scss";

import AdminDashboard from "./adminComponents/AdminDashboard";
import Login from "../LogReg/Login";
import AdminTopbar from "./AdminComponents/AdminTopbar";
import LoginUtama from "../LogReg/LoginUtama";
import Navbar from "../Navbar";
import Footer from "../Footer";
import AdminSideBar from "./AdminComponents/AdminSideBar";

function AdminPage() {
  const cekEmail = localStorage.getItem("account");
  const cekPassword = localStorage.getItem("pass");
  // window.location.reload();
  // navigation("/admin/dashboard");

  return (
    <>
      {!cekEmail && !cekPassword ? (
        <div>
          {/* <Navbar /> */}
          <Login />
          <Footer />
        </div>
      ) : (
        <div className="page-top" id="adminpagee">
          {/* <!-- Page Wrapper --> */}
          <div id="wrapper">
            <AdminSideBar />
            <AdminTopbar />
            <AdminDashboard />
          </div>
        </div>
      )}
    </>
  );
}

export default AdminPage;
