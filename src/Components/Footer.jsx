import React from "react";
import { Link } from "react-router-dom";

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
            <div className="col-3" width="200px">
              <h1 class="foth1">Rinsmakeup</h1>
              <center>
                <p class="fotp">
                  A marketing website platform where clients can view makeup
                  galleries and private classes being marketed along with
                  pricelists that are definitely up to date.
                </p>
              </center>
            </div>
            <div className="col-3" style={{ width: "300px" }}>
              <h1 class="foth2" style={{ fontSize: "24px", paddingTop: "5px" }}>
                Stay Connected with Us
              </h1>
              <div class="row" style={{ marginTop: "20px" }}>
                <div class="col-1" style={{ marginRight: "15px" }}>
                  <a
                    href="https://www.instagram.com/rinsmakeup/"
                    class="fa"
                    target="_blank"
                  >
                    <img src="/instagram.svg" width={30} title="Instagram" />
                  </a>
                </div>
                <div class="col-1" style={{ marginRight: "15px" }}>
                  <a
                    href="https://www.tiktok.com/@officialrinsmakeup"
                    class=""
                    target="_blank"
                  >
                    <img src="/tiktok.svg" width={30} title="Tiktok" />
                  </a>
                </div>
                <div class="col-1" style={{ marginRight: "15px" }}>
                  <a
                    href="https://www.youtube.com/@rinsmakeup2160"
                    target="_blank"
                    class=""
                  >
                    <img
                      src="/youtube.svg"
                      width={35}
                      title="Youtube"
                      style={{ paddingTop: "5px" }}
                    />
                  </a>
                </div>
                <div class="col-1" style={{ marginRight: "15px" }}>
                  <a
                    href="https://www.facebook.com/profile.php?id=100063765259055"
                    target="_blank"
                    class=""
                  >
                    <img
                      src="/facebook.svg"
                      width={35}
                      title="Facebook"
                      style={{ paddingTop: "2px" }}
                    />
                  </a>
                </div>
              </div>
              <h1
                class="foth2"
                style={{ fontSize: "24px", paddingTop: "15px" }}
              >
                Accepted Payments
              </h1>
              <div class="row" style={{ marginTop: "20px" }}>
                <div class="col-2" style={{ marginRight: "15px" }}>
                  <img src="/bca.png" width={55} />
                </div>
                <div class="col-2" style={{ marginRight: "15px" }}>
                  <img src="/mandiri.png" width={55} />
                </div>
                <div class="col-2" style={{ marginRight: "15px" }}>
                  <img src="/visa.png" width={55} />
                </div>
              </div>
            </div>
            <div className="col-3" width="200px">
              <div class="alamat">
                <h1
                  class="foth2"
                  style={{ fontSize: "24px", paddingTop: "15px" }}
                >
                  Alamat
                </h1>
                <p style={{ fontSize: "17px" }} class="fotp">
                  Cluster Haji Darna no. 320 RT 003/005. Gg. Mandor, Jl. Wibawa
                  Mukti II. Kel. Jatisari, Kec. Jatiasih. Bekasi 17426
                </p>
                <Link
                  to="https://maps.app.goo.gl/WgFLy5HDDRBRwp8f9"
                  style={{
                    fontSize: "17px",
                    textDecoration: "none",
                    color: "black",
                  }}
                  target="_blank"
                >
                  https://maps.app.goo.gl/WgFLy5HDDRBRwp8f9
                </Link>
              </div>
            </div>
            {/* <div
              class="col-3"
              style={{ marginTop: "10px", borderRadius: "25px" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.4333184072266!2d106.9421905!3d-6.3378784999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d79d173e657%3A0x2d3cff2a85bfc06!2sRinsmakeup!5e0!3m2!1sen!2sid!4v1686643777425!5m2!1sen!2sid"
                width="320"
                height="200"
                style={{ border: "0", borderRadius: "25px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div> */}
          </div>
        </div>
      </footer>
    </>
  );
}
