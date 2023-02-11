import React from "react";
import Cover from "./Dashboard/Cover";

function Dashboard() {
  return (
    <div>
      <Cover />
      <div>
        <a
          href="https://api.whatsapp.com/send?phone=%2B6287776474959&text=Halo Kak saya boleh minta Price Listnya ?"
          className="whatsapp_float"
          target="_blank"
        >
          <i
            className="fa fa-whatsapp"
            style={{ fontSize: "42px", color: "green" }}
            title="Whatsapp"
          ></i>
        </a>
        <a
          href="https://www.instagram.com/rinsmakeup/"
          className=" instagram_float"
          target="_blank"
        >
          <i
            className="fa fa-instagram"
            title="Instagram"
            style={{ fontSize: "48px", color: "white", zIndex: "2" }}
          ></i>
        </a>
      </div>
    </div>
  );
}

export default Dashboard;
