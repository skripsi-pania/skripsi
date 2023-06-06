import React, { useRef } from "react";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/modal";

function OurGallery() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let intervalId;

    const startCarousel = () => {
      intervalId = setInterval(() => {
        carousel.next();
      }, 2); // Atur kecepatan carousel disini (dalam milidetik)
    };

    const stopCarousel = () => {
      clearInterval(intervalId);
    };

    carousel.addEventListener("mouseenter", stopCarousel);
    carousel.addEventListener("mouseleave", startCarousel);

    startCarousel();

    return () => {
      stopCarousel();
      carousel.removeEventListener("mouseenter", stopCarousel);
      carousel.removeEventListener("mouseleave", startCarousel);
    };
  }, []);
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
        {/* ---------------------- carou ---------------------------- */}
        <div
          id="carouselExampleControls"
          ref={carouselRef}
          class="carousel slide"
          data-bs-ride="carousel"
          style={{
            marginTop: "60px",
            marginBottom: "60px",
            width: "50%",
            // border: "ridge",
            height: "500px",
          }}
        >
          <div class="carousel-inner">
            <div class="carousel-item active carou1 container row">
              <div
                class="col"
                // style={{
                //   border: "ridge",
                // }}
              >
                <img
                  src="./makeup/IMG_9427.jpg"
                  class="dc_s2 carou1"
                  width={250}
                  height={270}
                  style={{
                    borderRadius: "35px",
                    marginLeft: "100px !important",
                  }}
                />
                <img
                  src="./makeup/IMG_9428.jpg"
                  width={250}
                  height={270}
                  // height={300}
                  style={{
                    borderRadius: "35px",
                    marginLeft: "50px",
                  }}
                />
              </div>
              <div
                class="col"
                style={{
                  marginTop: "20px",
                }}
              >
                <img
                  src="./makeup/IMG_9426.jpg"
                  class="dc_s2"
                  width={250}
                  height={270}
                  style={{ borderRadius: "35px" }}
                />
                <img
                  src="./makeup/IMG_9425.jpg"
                  class="dc_s2"
                  width={250}
                  height={270}
                  style={{ borderRadius: "35px", marginLeft: "50px" }}
                />
              </div>

              <br />
            </div>
            <div class="carousel-item carou1">
              <div
                class="col"
                // style={{
                //   border: "ridge",
                // }}
              >
                <img
                  src="./makeup/wedding/wedding2.jpg"
                  class="dc_s2 carou1"
                  width={250}
                  height={270}
                  style={{
                    borderRadius: "35px",
                    marginLeft: "100px !important",
                  }}
                />
                <img
                  src="./makeup/wedding/wedding8.jpg"
                  width={250}
                  height={270}
                  // height={300}
                  style={{
                    borderRadius: "35px",
                    marginLeft: "50px",
                  }}
                />
              </div>
              <div
                class="col"
                style={{
                  marginTop: "20px",
                }}
              >
                <img
                  src="./makeup/IMG_9426.jpg"
                  class="dc_s2"
                  width={250}
                  height={270}
                  style={{ borderRadius: "35px" }}
                />
                <img
                  src="./makeup/IMG_9425.jpg"
                  class="dc_s2"
                  width={250}
                  height={270}
                  style={{ borderRadius: "35px", marginLeft: "50px" }}
                />
              </div>
            </div>

            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            {/* <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button> */}
          </div>
        </div>

        {/* ----------------------------- batas carouuuuu ----------------------- */}
        {/* <div class="col" style={{ paddingTop: "50px" }}>
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
        </div> */}
      </div>
    </div>
  );
}

export default OurGallery;
