import React, { useEffect, useRef, useState, useCallback } from "react";

export default function Graduationonly() {
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
      image.style.width = "700px";
      // image.style.height = "450px";
      el.style.gridRowEnd = `span ${Math.ceil(
        (getHeight(item) + gap) / (altura + gap)
      )}`;
    });
  }, []);

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
            <h1>Graduation</h1>
          </li>
        </center>
        <div className="gallery" id="gallery" ref={galleryRef}>
          {/* Images */}
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/graduation/IMG_0061.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/graduation/IMG_0072.jpg" alt="" />
            </div>
          </div>
          {/* <div className="gallery-item">
            <div className="content">
              <img
                src="./makeup/graduation/IMG_9989.JPG"
                alt=""
                class="overpic"
              />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/graduation/IMG_9990.JPG" alt="" />
            </div>
          </div> */}
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/graduation/IMG_0062.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/graduation/IMG_0065.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/graduation/IMG_0070.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/graduation/IMG_0108.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/graduation/IMG_0072.jpg" alt="" />
            </div>
          </div>{" "}
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/graduation/IMG_0110.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/graduation/IMG_0073.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/graduation/IMG_0122.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/graduation/IMG_0111.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/graduation/IMG_0071.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/graduation/IMG_0109.jpg" alt="" />
            </div>
          </div>
          <div className="gallery-item">
            <div className="content">
              <img src="./makeup/graduation/IMG_0112.jpg" alt="" />
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
