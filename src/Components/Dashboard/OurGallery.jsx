import React from "react";

function OurGallery() {
  return (
    <>
      <div>
        <h2 class="text-center" style={{ margin: "10vw" }}>
          Our Gallery
        </h2>
      </div>
      <div
        class="row"
        style={{ background: "", padding: "15px", marginLeft: "15px" }}
      >
        <div class="col">
          <img
            src="./makeup/IMG_9425.jpg"
            width={300}
            height={330}
            style={{ borderRadius: "35px" }}
          />
        </div>
        <div class="col">
          <img
            src="./makeup/IMG_9426.jpg"
            width={300}
            height={330}
            style={{ borderRadius: "35px" }}
          />
        </div>
        <div class="col">
          <img
            src="./makeup/IMG_9427.jpg"
            width={300}
            height={330}
            // height={300}
            style={{ borderRadius: "35px" }}
          />
        </div>
        <div class="col">
          <img
            src="./makeup/IMG_9428.jpg"
            width={300}
            height={330}
            style={{ borderRadius: "35px" }}
          />
        </div>
      </div>
    </>
  );
}

export default OurGallery;
