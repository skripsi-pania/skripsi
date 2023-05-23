import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <svg
          viewBox="0 -20 700 50"
          width="100%"
          // height="110"
          preserveAspectRatio="none"
        >
          <path
            transform="translate(0, -20)"
            d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700"
            fill="#fcecd4"
          />
          <path
            d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z"
            fill="#ffa5b4"
          />
        </svg>
        <div style={{ background: "#ffa5b4" }}>
          <div className="row">
            <div className="col" width="200px">
              <h1 class="foth1">Rinsmakeup</h1>
              <center>
                <p class="fotp">
                  A marketing website platform where clients can view makeup
                  galleries and private classes being marketed along with
                  pricelists that are definitely up to date.
                </p>
              </center>
            </div>
            <div className="col" width="200px">
              <h1
                class="foth1"
                style={{ fontSize: "28px", paddingTop: "35px" }}
              >
                Be Social & Stay Connected with Us
              </h1>
              <center>
                <div class="row" style={{ marginTop: "20px" }}>
                  <div class="col">
                    <a
                      href="https://www.instagram.com/rinsmakeup/"
                      class="fa"
                      target="_blank"
                    >
                      <img src="instagram.svg" width={30} title="Instagram" />
                    </a>
                  </div>
                  <div class="col">
                    <a
                      href="https://www.tiktok.com/@officialrinsmakeup"
                      class=""
                      target="_blank"
                    >
                      <img src="tiktok.svg" width={30} title="Tiktok" />
                    </a>
                  </div>
                  <div class="col">
                    <a
                      href="https://www.youtube.com/@rinsmakeup2160"
                      target="_blank"
                      class=""
                    >
                      <img
                        src="youtube.svg"
                        width={35}
                        title="Youtube"
                        style={{ paddingTop: "5px" }}
                      />
                    </a>
                  </div>
                  <div class="col">
                    <a
                      href="https://www.facebook.com/profile.php?id=100063765259055"
                      target="_blank"
                      class=""
                    >
                      <img
                        src="facebook.svg"
                        width={35}
                        title="Facebook"
                        style={{ paddingTop: "2px" }}
                      />
                    </a>
                  </div>
                </div>
              </center>
            </div>
            <div className="col" width="200px">
              <h1
                class="foth1"
                style={{ fontSize: "28px", paddingTop: "35px" }}
              >
                Accepted Payments
              </h1>
              <center>
                <div class="payment">
                  {/* <div>
                    <img src="facebook.svg" width={35} />
                  </div>
                  <div>
                    <img src="facebook.svg" width={35} />
                  </div> */}
                  <center>
                    <img src="bca.png" width={55} />
                    <img src="mandiri.png" width={55} />
                    <img src="visa.png" width={55} />
                  </center>
                </div>
              </center>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
