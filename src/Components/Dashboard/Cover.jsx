import React from "react";
import "./dashboard.css";

function Cover() {
  return (
    <>
      <div>
        <div className="container-fluid row">
          <div className="col bodyCover">
            <h2 className="col intro">
              Welcome to &nbsp;
              <li
                className="introone"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                RinsMakeup !
              </li>
            </h2>
          </div>

          <div className="col">
            <img
              src="makeup/wedding/newBanner.PNG"
              className="coverku0"
              style={{ marginLeft: "-30px", marginTop: "5px" }}
              width={600}
            />
          </div>
        </div>
      </div>
      <div>
        <h2 class="text-center" style={{ margin: "6vw" }}>
          Browse & Discover
        </h2>
      </div>
      <div class=" findd">
        <div class="text-find">
          <h3>Find your makeup needs right now</h3>
        </div>
      </div>
    </>
  );
}

export default Cover;
