import React from "react";
import "./admin.css";
import "./_topbar.scss";

import Login from "../LogReg/Login";
import AdminTopbar from "./AdminComponents/AdminTopbar";
import Footer from "../Footer";
import AdminSideBar from "./AdminComponents/AdminSideBar";
import AdminDashboard from "./AdminComponents/AdminDashboard";

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
