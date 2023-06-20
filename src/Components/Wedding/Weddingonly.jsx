import axios from "axios";
import "./weddingonly.css";
import React, { useEffect, useRef, useState, useCallback } from "react";

export default function Weddingonly() {
  const galleryRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 8;
  const [filteredData, setFilteredData] = useState([]);

  const resizeAll = useCallback(() => {
    const gallery = galleryRef.current;
    const getVal = (elem, style) => {
      return parseInt(window.getComputedStyle(elem)?.getPropertyValue(style));
    };
    const getHeight = (item) => {
      return item.querySelector(".content").getBoundingClientRect().height;
    };
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

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://skripsi-vaniasasikirana.onrender.com/userpage/"
      );
      const data = response.data.data;
      const filteredData = data.filter((item) => item.content === "wedding");
      return filteredData;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  useEffect(() => {
    const gallery = galleryRef.current;
    const handleResize = () => {
      resizeAll();
    };

    window.addEventListener("resize", handleResize);
    resizeAll();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [resizeAll]);

  useEffect(() => {
    fetchData().then((data) => {
      setFilteredData(data);
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

      el.style.display = isPageInRange ? "block" : "none";

      const image = el.querySelector("img");
      const dataIndex = (currentPage - 1) * imagesPerPage + index;
      if (filteredData[dataIndex]) {
        image.setAttribute("src", filteredData[dataIndex]?.alamat_url);
      }

      image.addEventListener("click", () => {
        resizeAll();
        el.classList.toggle("full");
        // alert("Klik Image Untuk Menghilangkannya");
      });
    });

    resizeAll(); // Panggil resizeAll setiap kali halaman berubah
  }, [currentPage, resizeAll, filteredData]);

  return (
    <>
      <div className="container-sm GridWedding">
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
          {filteredData.map((item, index) => (
            <div className="gallery-item" key={index}>
              <div className="content">
                <img src={item.alamat_url} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
