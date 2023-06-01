import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div id="navbarr">
      <nav class="navbar navbar-expand-lg bg-body-tertiary  ">
        <div class="container-fluid">
          <Link to="/">
            <p class="navbar-brand iconimg" href="#">
              {/* <center> */}
              <img src="rins3.gif" /> {/* </center> */}
            </p>
          </Link>
          <button
            class="navbar-toggler togglee"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse text-center" id="navbarNav">
            <ul class="navbar-nav col navsatu navawall">
              <Link
                to={"/wedding"}
                style={{
                  textDecoration: "none",
                  fontFamily: "Playfair Display",
                  fontSize: "21px",
                  fontWeight: "600",
                }}
              >
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Wedding
                  </a>
                </li>
              </Link>

              {/* <!-- DROPDOWN-------------------- --> */}
              {/* <li className="nav-item dropdown navawall"> */}
              {/* <a
                  className="nav-link dropdown-toggle navmenu dropbtn"
                  id="menuu"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Category
                </a> */}

              {/* <div className="dropdown-menu mt-1" id="navdd"> */}
              {/* <Link to={"/dampak"} style={{ textDecoration: "none" }}> */}
              {/* <center> */}
              {/* <a>
                      <li className="abc">
                        <p className="dropdown-item abc">Party</p>
                      </li>
                    </a> */}
              {/* </Link> */}
              {/* <hr></hr>g */}
              {/* <li className="abc"><a className="dropdown-item abc" href="#">Informasi Pencegahan<br></br>Bencana</a></li><hr></hr> */}
              {/* <Link to={"/pencegahan"} style={{ textDecoration: "none" }}> */}
              {/* <li className="abc">
                      <p className="dropdown-item abc">Graduation</p>
                    </li> */}
              {/* <hr></hr> */}
              {/* <li className="abc">
                      <p className="dropdown-item abc">Engagement</p>
                    </li> */}
              {/* </Link> */}
              {/* <hr></hr> */}
              {/* <li className="abc"><a className="dropdown-item abc" href="#">Artikel Informasi</a></li><hr></hr> */}
              {/* <Link to={"/forum"} style={{ textDecoration: "none" }}> */}
              {/* <li className="abc">
                      <p className="dropdown-item abc">Wedding </p>
                    </li> */}
              {/* </center> */}
              {/* </Link> */}
              {/* </div> */}
              {/* </li> */}
              <li class="nav-item navawall">
                <Link
                  to="/engagement"
                  style={{
                    textDecoration: "none",
                    fontFamily: "Playfair Display",
                    fontSize: "21px",
                    fontWeight: "600",
                  }}
                >
                  <a class="nav-link " href="#">
                    Engagement
                  </a>
                </Link>
              </li>
              <Link
                to="/graduation"
                style={{
                  textDecoration: "none",
                  fontFamily: "Playfair Display",
                  fontSize: "21px",
                  fontWeight: "600",
                }}
              >
                <li class="nav-item navawall">
                  <a class="nav-link " href="#">
                    Graduation
                  </a>
                </li>
              </Link>
            </ul>
            <ul class="navbar-nav col-6 lore navdua">
              <center>
                <div class="nav-item loredet loginbutton0">
                  <button class="nav-link btn" id="loginbutton" href="#">
                    About Us
                  </button>
                </div>
              </center>
              <center>
                <div class="nav-item">
                  <button
                    class="nav-link btn-0 btn-3"
                    id="registerbutton"
                    href="#"
                  >
                    Private Class &rarr;
                  </button>
                </div>
              </center>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
