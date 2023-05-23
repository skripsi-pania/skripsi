import React from "react";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/modal";

function OurGallery() {
  return (
    <div style={{ margin: "0" }}>
      <div>
        <h2 class="text-center" style={{ margin: "10vw" }}>
          Our Gallery
        </h2>
      </div>
      <div
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
      </div>
    </div>
  );
}

export default OurGallery;
