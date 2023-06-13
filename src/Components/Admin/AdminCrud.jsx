import React from "react";
import "./admin.css";
import "./_topbar.scss";

import AdminSideBar from "./AdminComponents/AdminSideBar";
import AdminTopbar from "./AdminComponents/AdminTopbar";
import AdminCPengguna from "./AdminComponents/AdminCPengguna";
import Login from "../LogReg/Login";

function AdminCrud() {
  const cekEmail = localStorage.getItem("account");
  const cekPassword = localStorage.getItem("pass");
  return (
    <>
      {!cekEmail && !cekPassword ? (
        <Login />
      ) : (
        <div className="page-top crudpengguna" id="adminpagee">
          {/* <!-- Page Wrapper --> */}
          <div id="wrapper">
            <AdminSideBar />
            <AdminTopbar />
            <AdminCPengguna />
          </div>
        </div>
      )}
    </>
  );
}

export default AdminCrud;
