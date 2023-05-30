import "./weddingonly.css";
import React, { useEffect, useRef, useState } from "react";

export default function Weddingonly() {
  const galleryRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 8;

  useEffect(() => {
    const gallery = galleryRef.current;
    const getVal = (elem, style) => {
      return parseInt(window.getComputedStyle(elem)?.getPropertyValue(style));
    };
    const getHeight = (item) => {
      return item.querySelector(".content").getBoundingClientRect().height;
    };
    const resizeAll = () => {
      const altura = getVal(gallery, "grid-auto-rows");
      const gap = getVal(gallery, "grid-row-gap");
      gallery.querySelectorAll(".gallery-item").forEach((item, index) => {
        const el = item;
        const image = el.querySelector("img");
        image.style.width = "600px";
        image.style.height = "auto";
        el.style.gridRowEnd = `span ${Math.ceil(
          (getHeight(item) + gap) / (altura + gap)
        )}`;
        if (
          index >= (currentPage - 1) * imagesPerPage &&
          index < currentPage * imagesPerPage
        ) {
          el.style.display = "block";
        } else {
          el.style.display = "none";
        }
      });
    };

    window.addEventListener("resize", resizeAll);

    gallery.querySelectorAll(".gallery-item").forEach((item) => {
      item.addEventListener("click", () => {
        item.classList.toggle("full");
      });
    });

    resizeAll(); // Call resizeAll initially to set the grid layout
  }, [currentPage]);

  const handleNextPage = () => {
    const gallery = galleryRef.current;
    const totalImages = gallery.querySelectorAll(".gallery-item").length;
    const totalPages = Math.ceil(totalImages / imagesPerPage);
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <>
      <div class="container-sm GridWedding">
        <center>
          <li
            className="introone"
            style={{
              textDecoration: "none",
              color: "inherit",
              marginBottom: "80px",
            }}
          >
            <h1>Wedding</h1>
          </li>
        </center>
        <div className="gallery" id="gallery" ref={galleryRef}>
          {/* Images */}
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/wedding1.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/wedding10.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/wedding3.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/wedding4.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/wedding5.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/wedding6.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/wedding7.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/wedding8.jpg" alt="" />
            </div>
          </div>{" "}
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/wedding9.jpg" alt="" />
            </div>
          </div>
          {/* aaaloooooooooooow */}
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/wedding1.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/wedding10.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/wedding3.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/wedding4.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/wedding5.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/wedding6.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/wedding7.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/wedding8.jpg" alt="" />
            </div>
          </div>{" "}
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/wedding9.jpg" alt="" />
            </div>
          </div>
          {/* aaaloooooooooooow */}
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/wedding1.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/wedding10.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/wedding3.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/wedding4.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/wedding5.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/wedding6.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/wedding7.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/wedding8.jpg" alt="" />
            </div>
          </div>{" "}
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/wedding9.jpg" alt="" />
            </div>
          </div>
          {/* aaaloooooooooooow */}
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/wedding1.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/wedding10.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/wedding3.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/wedding4.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/wedding5.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/wedding6.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/wedding7.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/wedding8.jpg" alt="" />
            </div>
          </div>{" "}
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/wedding9.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="pagination">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            class="previous"
          >
            Previous
          </button>
          <button
            class="next"
            onClick={handleNextPage}
            disabled={
              currentPage ===
              Math.ceil(
                galleryRef.current?.querySelectorAll(".gallery-item").length /
                  imagesPerPage
              )
            }
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
