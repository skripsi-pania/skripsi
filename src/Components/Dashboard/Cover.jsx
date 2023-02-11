import React from "react";
import "./dashboard.css";

function Cover() {
  return (
    <>
      <div>
        <div className="row">
          <div className="col bodyCover">
            <h2 className="intro">
              Welcome to &nbsp;
              <span className="introone" style={{}}>
                RinsMakeup !
              </span>
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
