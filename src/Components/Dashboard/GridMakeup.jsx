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

      <div
        class="row align-items-center container"
        style={{ margin: "0 auto" }}
      >
        <div class="col-4 cardGrid cardGridWed">
          <div class="basewed2">
            <div className="catGrid cardGridWed2">
              <p class="test">Wedding</p>
              <center>
                <Link to="/wedding">
                  <button class="test"> Click me!</button>
                </Link>
              </center>
            </div>
          </div>
        </div>
        <div class="col-4 cardGrid cardGridEng">
          <div className="catGrid ">
            <p>Engagement</p>
            <center>
              <button> Click me!</button>
            </center>
          </div>
        </div>
        <div class="col-4 cardGrid cardGridGrad">
          <div className="catGrid ">
            <p>Graduation</p>
            <center>
              <button> Click me!</button>
            </center>
          </div>
        </div>
      </div>
    </>
  );
}

export default GridMakeup;
