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
              <a
                className="introone"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                RinsMakeup !
              </a>
              {/* <img src="/rins1.png" className="col rins0" /> */}
            </h2>
          </div>

          <div className="col">
            <img
              src="makeup/cover2.png"
              className="coverku"
              style={{ borderRadius: "30vw" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cover;
