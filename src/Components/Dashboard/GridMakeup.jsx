import React from "react";
import "./grid.css";
import { Link } from "react-router-dom";
function GridMakeup() {
  return (
    <>
      {/* <div className="wadahGrid">
        <div>utama</div>
        <div>
          <div style={{ marginLeft: "150px" }}>
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/241400375-327257282527442-1338380145796027858-n-1639160533.jpg?crop=1xw:0.6xh;center,top&resize=1200:*"
              width="150"
              style={{ borderRadius: "25px" }}
            ></img>
          </div>
        </div>
      </div> */}
      <center>
        <div class="row align-items-center  woi">
          <div class="col-3 cardGrid cardGridWed wed0">
            <div class="basewed2">
              <div className="catGrid cardGridWed2 wed1">
                <p class="test">Wedding</p>
                <center>
                  <Link to="/wedding">
                    <button class="test"> Click me!</button>
                  </Link>
                </center>
              </div>
            </div>
          </div>

          <div
            class="col-3 cardGrid cardGridEng eng0"
            style={{ marginLeft: "140px" }}
          >
            <div className="catGrid ">
              <p>Engagement</p>
              <center>
                <Link to="/engagement">
                  <button> Click me!</button>
                </Link>
              </center>
            </div>
          </div>
          <div class="col-3 cardGrid cardGridGrad grad0">
            <div className="catGrid grad1">
              <p>Graduation</p>
              <center>
                <Link to="/graduation">
                  <button> Click me!</button>
                </Link>
              </center>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}

export default GridMakeup;
