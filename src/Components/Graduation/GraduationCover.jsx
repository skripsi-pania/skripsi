import React from "react";
import { Link } from "react-router-dom";

export default function GraduationCover() {
  return (
    <>
      <div class="container row">
        <div class="col">
          <img
            src="makeup/graduation/banenrGradu.PNG"
            className="coverku0"
            style={{ marginLeft: "-13px", marginTop: "-135px" }}
            width={725}
          />
        </div>
        <div class="col" style={{ marginTop: "25px" }}>
          <center>
            {/* <h1>Wedding Detail</h1> */}
            <br />
          </center>
          <h3 style={{ fontSize: "25px", fontWeight: "600" }}>
            Non wedding&emsp;
            <span style={{ color: "red", fontSize: "25px", fontWeight: "600" }}>
              Mulai 700k
            </span>
          </h3>
          <p style={{ paddingLeft: "20px", fontSize: "18px" }}>- Graduation</p>
          <p style={{ paddingLeft: "20px", fontSize: "18px" }}>- Bridesmaid</p>
          <p style={{ paddingLeft: "20px", fontSize: "18px" }}>
            - Party
            {/* <span style={{ color: "red" }}>Rp. 1.500.000</span> */}
          </p>
          <p style={{ paddingLeft: "20px", fontSize: "18px" }}>
            - Photoshoot
            {/* <span style={{ color: "red" }}> Rp. 2.000.000</span> */}
          </p>
          <p style={{ paddingLeft: "20px", fontSize: "18px" }}>
            - Maternity
            {/* <span style={{ color: "red" }}> Rp. 2.000.000</span> */}
          </p>
          <p style={{ paddingLeft: "20px", fontSize: "18px" }}>
            - Pengajian/ Siraman{" "}
            {/* <span style={{ color: "red" }}> Rp. 2.000.000</span> */}
          </p>

          <h4
            style={{ fontSize: "15px", fontWeight: "600", paddingLeft: "20px" }}
          >
            Exclude Transport
          </h4>
          <br />

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
