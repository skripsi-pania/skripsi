import React from "react";
import "./dashboard.css";

function Cover() {
  return (
    <>
      <div>
        <div className="row">
          <div className="col bodyCover">
            <h2 className="col intro">
              Welcome to &nbsp;
              <li
                className="introone"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                RinsMakeup !
              </li>
              {/* <img src="/rins1.png" className="col rins0" /> */}
            </h2>
          </div>

          <div className="col">
            <img
              src="makeup/cover3.png"
              className="coverku"
              style={{ borderRadius: "30vw" }}
            />
          </div>
        </div>
      </div>
      <div>
        <h2 class="text-center" style={{ margin: "10vw" }}>
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
