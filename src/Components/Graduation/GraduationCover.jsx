import React from "react";
import { Link } from "react-router-dom";

export default function GraduationCover() {
  return (
    <>
      <div class="container row">
        <div class="col">
          <img
            src="makeup/engagement/bannerEngagement1.PNG"
            className="coverku0"
            style={{ marginLeft: "-13px", marginTop: "5px" }}
            width={600}
          />
        </div>
        <div class="col" style={{ marginTop: "25px" }}>
          <center>
            {/* <h1>Wedding Detail</h1> */}
            <br />
          </center>
          <h3 style={{ fontSize: "25px", fontWeight: "600" }}>
            Photo Only&emsp;
            <span style={{ color: "red", fontSize: "25px", fontWeight: "600" }}>
              Rp. X.000.000
            </span>
          </h3>
          <p style={{ paddingLeft: "20px", fontSize: "18px" }}>
            - 1x Makeup by Rins/Tim
          </p>
          <p style={{ paddingLeft: "20px", fontSize: "18px" }}>
            - 5 Hours Photo Session
          </p>
          <p style={{ paddingLeft: "20px", fontSize: "18px" }}>
            - 1 Photographer
            {/* <span style={{ color: "red" }}>Rp. 1.500.000</span> */}
          </p>
          <p style={{ paddingLeft: "20px", fontSize: "18px" }}>
            - 20-50 Edit Photo
            {/* <span style={{ color: "red" }}> Rp. 2.000.000</span> */}
          </p>
          <p style={{ paddingLeft: "20px", fontSize: "18px" }}>
            - Softcopy via Google Drive
            {/* <span style={{ color: "red" }}> Rp. 2.000.000</span> */}
          </p>

          <h4
            style={{ fontSize: "15px", fontWeight: "600", paddingLeft: "20px" }}
          >
            Exclude Transport
          </h4>
          <br />
          <h3 style={{ fontSize: "25px", fontWeight: "600" }}>
            Photo Video&emsp;
            <span style={{ color: "red", fontSize: "25px", fontWeight: "600" }}>
              Rp. 4.000.000
            </span>
          </h3>
          <p style={{ paddingLeft: "20px", fontSize: "18px" }}>
            - 1x Makeup by Rins/Tim
          </p>
          <p style={{ paddingLeft: "20px", fontSize: "18px" }}>
            - 5 Hours Photo Session
          </p>
          <p style={{ paddingLeft: "20px", fontSize: "18px" }}>
            - 1 Photographer
          </p>
          <p style={{ paddingLeft: "20px", fontSize: "18px" }}>
            - 1 Videographer{" "}
          </p>
          <p style={{ paddingLeft: "20px", fontSize: "18px" }}>
            - 20-50 Edit Photo
          </p>
          <p style={{ paddingLeft: "20px", fontSize: "18px" }}>
            - 1 Min Video Teaser{" "}
          </p>
          <p style={{ paddingLeft: "20px", fontSize: "18px" }}>
            - Softcopy via Google Drive
            {/* <span style={{ color: "red" }}> Rp. 2.000.000</span> */}
          </p>

          <h4
            style={{ fontSize: "15px", fontWeight: "600", paddingLeft: "20px" }}
          >
            Exclude Transport
          </h4>

          <br />
          <h3 style={{ fontSize: "25px", fontWeight: "600" }}>
            PAKET PREWEDDING
            <span style={{ color: "red" }}>&emsp;Mulai dari 1 Jutaan aja!</span>
          </h3>
          <br />
          <Link
            to="https://drive.google.com/file/d/1k0L92lBrWgnNtbgDQa8msMS0Ql9TM5I0/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              style={{
                borderRadius: "25px",
                marginLeft: "30px",
                backgroundColor: "#fcecd4",
                color: "black",
                width: "100px",
                paddingTop: "3px",
                paddingBottom: "3px",
                fontSize: "18px",
              }}
            >
              Detail &nbsp;
              <i class="fa fa-heart" style={{ color: "#ffa5b4" }}></i>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
