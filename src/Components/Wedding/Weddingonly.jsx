import "./weddingonly.css";
import React, { useEffect, useRef, useState, useCallback } from "react";

export default function Weddingonly() {
  const galleryRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 8;

  const resizeAll = useCallback(() => {
    const gallery = galleryRef.current;
    const getVal = (elem, style) => {
      return parseInt(window.getComputedStyle(elem)?.getPropertyValue(style));
    };
    const getHeight = (item) => {
      return item.querySelector(".content").getBoundingClientRect().height;
    };
    console.log("aktif mak");
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
    });
  }, []);

  useEffect(() => {
    const gallery = galleryRef.current;

    const handleResize = () => {
      resizeAll();
    };

    window.addEventListener("resize", handleResize);
    resizeAll(); // Panggil resizeAll secara inisial untuk mengatur tata letak grid

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [resizeAll]);

  useEffect(() => {
    const gallery = galleryRef.current;
    const totalImages = gallery.querySelectorAll(".gallery-item").length;
    const totalPages = Math.ceil(totalImages / imagesPerPage);

    gallery.querySelectorAll(".gallery-item").forEach((item, index) => {
      const el = item;
      const isPageInRange =
        index >= (currentPage - 1) * imagesPerPage &&
        index < currentPage * imagesPerPage;

      el.style.display = isPageInRange ? "block" : "block"; //ini membuat semua gambar muncul popUp di halaman yg sama!!

      el.addEventListener("click", () => {
        resizeAll();
        el.classList.toggle("full");
      });
    });

    resizeAll(); // Panggil resizeAll setiap kali halaman berubah
  }, [currentPage, resizeAll]);

  const handleNextPage = () => {
    const gallery = galleryRef.current;
    const totalImages = gallery.querySelectorAll(".gallery-item").length;
    const totalPages = Math.ceil(totalImages / imagesPerPage);
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
      gallery.scrollTo(0, 0); // Pergi ke posisi awal galeri pada halaman baru
      resizeAll(); // Panggil resizeAll setelah mengubah halaman
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      gallery.scrollTo(0, 0); // Pergi ke posisi awal galeri pada halaman baru
      resizeAll(); // Panggil resizeAll setelah mengubah halaman
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
              <img src="./makeup/wedding/IMG_9890.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/IMG_9884.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/wedding3.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/IMG_9886.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/IMG_9904.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/IMG_9883.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/IMG_9911.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/IMG_9887.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/IMG_9888.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/IMG_9889.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/IMG_9908.jpg" alt="" />
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
              <img src="./makeup/wedding/wedding10.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/IMG_9885.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/IMG_9972.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/wedding/IMG_9988.JPG" alt="" />
            </div>
          </div>
        </div>
        {/* <div className="pagination">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="previous"
          >
            Previous
          </button>
          <button
            className="next"
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
        </div> */}
      </div>
    </>
  );
}
