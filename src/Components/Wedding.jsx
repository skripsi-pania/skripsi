import { useEffect, useState } from "react";
import OurGallery from "./Dashboard/OurGallery";
import Footer from "./Footer";
import IgdanWa from "./IgdanWa";
import Navbar from "./Navbar";
import Weddingonly from "./Wedding/Weddingonly";

export default function Wedding() {
  //Click event scroll to top button jquery
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Navbar />
      <button onClick={scrollToTop}>Scroll to Top</button>
      <h3>alooo</h3>
      <Weddingonly />
      <OurGallery />
      <IgdanWa />

      <Footer />
      <button
        type="button"
        onClick={scrollToTop}
        id="myBtn"
        onclick="topFunction()"
        className="arrow_float"
        target="_blank"
        style={{
          backgroundColor: "transparent",
          backgroundRepeat: "no-repeat",
          border: "none",
          cursor: "pointer",
          overflow: "hidden",
          outline: "none",
        }}
      >
        <i
          className="	fa fa-arrow-circle-up"
          style={{ fontSize: "48px", color: "black" }}
          title="Whatsapp"
        ></i>
      </button>
    </>
  );
}
