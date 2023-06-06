import { useEffect, useState } from "react";
import OurGallery from "./Dashboard/OurGallery";
import Footer from "./Footer";
import IgdanWa from "./IgdanWa";
import Navbar from "./Navbar";
import Weddingonly from "./Wedding/Weddingonly";
import WeddingCover from "./Wedding/WeddingCover";

export default function Wedding() {
  (function ($) {
    $(document).ready(function () {
      // Initially hide the button
      $("#myBtn").hide();

      $(window).scroll(function () {
        if ($(this).scrollTop() > 1200) {
          $("#myBtn").fadeIn();
        } else {
          $("#myBtn").fadeOut();
        }
      });
    });
  })(jQuery);
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
      <WeddingCover />
      <br />
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
        ></i>
      </button>
    </>
  );
}
