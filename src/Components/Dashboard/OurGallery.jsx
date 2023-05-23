import React from "react";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/modal";

function OurGallery() {
  return (
    <div style={{ margin: "0" }}>
      <div
        class="container-fluid"
        style={{
          height: "100px",
          backgroundColor: "#ffa5b4",
          borderBottom: "15px solid #fcecd4",
          marginTop: "100px",
        }}
      >
        <h2
          class="text-center "
          style={{
            color: "white",
            fontWeight: "700",
            margin: "6vw",
            paddingTop: "25px",
          }}
        >
          Our Gallery
        </h2>
      </div>
      {/* <div
        class="container-fluid row"
        style={{
          background: "",
          marginBottom: "100px",
          paddingLeft: "40px",
        }}
      >
        <div class="col-3 me-0">
          <img
            src="./makeup/IMG_9425.jpg"
            width={310}
            height={330}
            style={{ borderRadius: "35px" }}
          />
        </div>
        <div class="col-3 me-0">
          <img
            src="./makeup/IMG_9426.jpg"
            width={310}
            height={330}
            style={{ borderRadius: "35px" }}
          />
        </div>
        <div class="col-3 me-0">
          <img
            src="./makeup/IMG_9427.jpg"
            width={310}
            height={330}
            // height={300}
            style={{ borderRadius: "35px" }}
          />
        </div>
        <div class="col-3 me-0">
          <img
            src="./makeup/IMG_9428.jpg"
            width={310}
            height={330}
            style={{ borderRadius: "35px" }}
          />
        </div>
      </div> */}
      <div
        class="container-fluid row"
        style={{
          background: "",
          marginBottom: "-10px",
          paddingLeft: "40px",
        }}
      >
        <div class="col" style={{ height: "500px" }}>
          <img
            src="./makeup/Banner.PNG"
            width={800}
            // height={220}
            // height={300}
            style={{
              position: "relative",
              top: "-80px",
              marginLeft: "-150px",
            }}
          />
        </div>
        <div class="col" style={{ paddingTop: "50px" }}>
          <center>
            <div class="col row me-0">
              <div class="col">
                <img
                  src="./makeup/IMG_9425.jpg"
                  width={250}
                  height={270}
                  style={{ borderRadius: "35px" }}
                />
              </div>
              <div class="col">
                <img
                  src="./makeup/IMG_9426.jpg"
                  width={250}
                  height={270}
                  style={{ borderRadius: "35px" }}
                />
              </div>
            </div>
            <div class="col row me-0" style={{ marginTop: "25px" }}>
              <div class="col">
                <img
                  src="./makeup/IMG_9427.jpg"
                  width={250}
                  height={270}
                  // height={300}
                  style={{ borderRadius: "35px" }}
                />
              </div>
              <div class="col">
                <img
                  src="./makeup/IMG_9428.jpg"
                  width={250}
                  height={270}
                  style={{ borderRadius: "35px" }}
                />
              </div>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
}

export default OurGallery;
