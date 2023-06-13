import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function AdminSideBar() {
  const navigation = useNavigate();

  const HandleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("account");
    localStorage.removeItem("token");
    localStorage.removeItem("roles");
    localStorage.removeItem("username");
    localStorage.removeItem("geo-location");
    // window.location.reload()
    navigation(`/`);
  };

  return (
    <div className="sidebarr">
      {/* <!-- Sidebar --> */}
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center">
          <div className="sidebar-brand-icon">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <h4 className="sidebar-brand-text mx-3" style={{ fontWeight: "900" }}>
            Rinsmakeup
          </h4>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />
        <br />
        <br />
        <br />
        {/* <!-- Nav Item - Dashboard --> */}
        <Link
          to="/admin/dashboard"
          style={{ color: "white", textDecoration: "none", marginTop: "20px" }}
        >
          <h6 class="mx-3">Dashboard</h6>
        </Link>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">
          -------------------------------------
        </div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <Link
          to="/admin-crud"
          style={{ color: "white", textDecoration: "none", marginTop: "20px" }}
        >
          <h6 class="mx-3">Manage User Account</h6>
        </Link>
        <Link
          to="/admin-crud"
          style={{ color: "white", textDecoration: "none", marginTop: "20px" }}
        >
          <h6 class="mx-3">Manage Gallery &nbsp;&nbsp; Wedding</h6>
        </Link>
        <Link
          to="/admin-crud"
          style={{ color: "white", textDecoration: "none", marginTop: "20px" }}
        >
          <h6 class="mx-3">Manage Gallery Engagement</h6>
        </Link>
        <Link
          to="/admin-crud"
          style={{ color: "white", textDecoration: "none", marginTop: "20px" }}
        >
          <h6 class="mx-3">Manage Gallery Graduation</h6>
        </Link>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block" />
        <hr className="sidebar-divider d-none d-md-block" />
        <hr className="sidebar-divider d-none d-md-block" />
        <hr className="sidebar-divider d-none d-md-block" />
        <hr className="sidebar-divider d-none d-md-block" />
        <hr className="sidebar-divider d-none d-md-block" />
        <hr className="sidebar-divider d-none d-md-block" />
        <hr className="sidebar-divider d-none d-md-block" />
        <hr className="sidebar-divider d-none d-md-block" />
        <hr className="sidebar-divider d-none d-md-block" />
        <hr className="sidebar-divider d-none d-md-block" />
        <hr className="sidebar-divider d-none d-md-block" />
        <hr className="sidebar-divider d-none d-md-block" />
        <hr className="sidebar-divider d-none d-md-block" />
        <hr className="sidebar-divider d-none d-md-block" />

        {/* <!-- Sidebar Message --> */}
        <div className="sidebar-card d-lg-flex logoutAdmin">
          {/* <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..."/> */}
          <p className="text-center mb-2">Thankyou, see you again!</p>
          <a
            onClick={HandleLogout}
            className="btn btn-success btn-sm "
            href="https://startbootstrap.com/theme/sb-admin-pro"
          >
            Logout
          </a>
        </div>
      </ul>
      {/* <!-- End of Sidebar --> */}

      {/* <Outlet/> */}
    </div>
  );
}

export default AdminSideBar;
