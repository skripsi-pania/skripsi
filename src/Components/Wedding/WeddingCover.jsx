import React from "react";
import { Link } from "react-router-dom";

export default function WeddingCover() {
  return (
    <>
      <div class="container row">
        <div class="col">
          <img
            src="makeup/wedding/weddingbanner.PNG"
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
            Wedding Makeup by Rins :
          </h3>
          <p style={{ paddingLeft: "20px", fontSize: "18px" }}>
            - Makeup Only (Akad/Resepsi) &emsp;
            <span style={{ color: "red", fontSize: "25px", fontWeight: "600" }}>
              {" "}
              Rp. X.500.000
            </span>
          </p>
          <p style={{ paddingLeft: "20px", fontSize: "18px" }}>
            - 1x Retouch &emsp;
            {/* <span style={{ color: "red" }}>Rp. 1.500.000</span> */}
          </p>
          <p style={{ paddingLeft: "20px", fontSize: "18px" }}>
            - 2x Retouch &emsp;
            {/* <span style={{ color: "red" }}> Rp. 2.000.000</span> */}
          </p>
          <h4 style={{ fontSize: "18px", fontWeight: "600" }}>
            Harga Termasuk :
          </h4>
          <p style={{ paddingLeft: "20px", fontSize: "18px" }}>
            - Hijabdo (non adat)
          </p>
          <p style={{ paddingLeft: "20px", fontSize: "18px" }}>
            - Free Softlens (bisa minus)
          </p>
          <br />
          <h3 style={{ fontSize: "25px", fontWeight: "600" }}>
            Package : All in One 1{" "}
            <span style={{ color: "red" }}>&emsp;Rp. 8.100.000</span>
          </h3>
          <h4 style={{ fontSize: "15px", fontWeight: "600" }}>Includes : </h4>
          <p style={{ paddingLeft: "20px", fontSize: "18px" }}>
            - Makeup & Hijab (Akad atau Resepsi Only)
          </p>
          <p style={{ paddingLeft: "20px", fontSize: "18px" }}>
            - 1 Pasang Busana Pengantin (Ready Stock)
          </p>
          <p style={{ paddingLeft: "20px", fontSize: "18px" }}>
            - 2 Pasang Baju Orangtua Pengantin (Ready Stock)
          </p>
          <p style={{ paddingLeft: "20px", fontSize: "18px" }}>
            - 2 Set Baju Penjaga Buku Tamu
          </p>
          <p style={{ paddingLeft: "20px", fontSize: "18px" }}>
            - 2 Makeup Ibu Pengantin
          </p>
          <p style={{ paddingLeft: "20px", fontSize: "18px" }}>
            - 2 Make Up Penjaga Buku Tamu
          </p>
          <p style={{ paddingLeft: "20px", fontSize: "18px" }}>
            - Fresh Flower ( Melati 1 Pasang )
          </p>
          <p style={{ paddingLeft: "20px", fontSize: "18px" }}>
            - Accessories Standart ( Ready Stock)
          </p>
          <p style={{ paddingLeft: "20px", fontSize: "18px" }}>
            - Bonus Softlens (Bisa Minus)
          </p>
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
