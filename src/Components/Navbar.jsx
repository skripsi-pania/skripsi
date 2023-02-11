import React from "react";

function Navbar() {
  return (
    <div id="navbarr">
      <nav class="navbar navbar-expand-lg bg-body-tertiary  ">
        <div class="container-fluid">
          <p class="navbar-brand iconimg" href="#">
            {/* <center> */}
            <img src="rins2.gif" /> {/* </center> */}
          </p>
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
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              {/* <!-- DROPDOWN-------------------- --> */}
              <li className="nav-item dropdown navawall">
                <a
                  className="nav-link dropdown-toggle navmenu dropbtn"
                  id="menuu"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Category
                </a>

                <div className="dropdown-menu mt-1" id="navdd">
                  {/* <Link to={"/dampak"} style={{ textDecoration: "none" }}> */}
                  <center>
                    <a>
                      <li className="abc partyy">
                        <p className="abc">Party</p>
                      </li>
                    </a>
                    {/* </Link> */}
                    <hr></hr>
                    {/* <li className="abc"><a className="dropdown-item abc" href="#">Informasi Pencegahan<br></br>Bencana</a></li><hr></hr> */}
                    {/* <Link to={"/pencegahan"} style={{ textDecoration: "none" }}> */}
                    <li className="abc">
                      <p className="dropdown-item abc">Graduation</p>
                    </li>
                    <hr></hr>
                    <li className="abc">
                      <p className="dropdown-item abc">Engagement</p>
                    </li>
                    {/* </Link> */}
                    <hr></hr>
                    {/* <li className="abc"><a className="dropdown-item abc" href="#">Artikel Informasi</a></li><hr></hr> */}
                    {/* <Link to={"/forum"} style={{ textDecoration: "none" }}> */}
                    <li className="abc">
                      <p className="dropdown-item abc">Wedding </p>
                    </li>
                  </center>
                  {/* </Link> */}
                </div>
              </li>
              <li class="nav-item navawall">
                <a class="nav-link " href="#">
                  Review
                </a>
              </li>
            </ul>
            <ul class="navbar-nav col-6 lore navdua">
              <center>
                <div class="nav-item loredet loginbutton0">
                  <button class="nav-link btn" id="loginbutton" href="#">
                    Login
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
                    Register &rarr;
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
