import { useEffect, useState } from "react";
import OurGallery from "./Dashboard/OurGallery";
import Footer from "./Footer";
import IgdanWa from "./IgdanWa";
import Navbar from "./Navbar";
import Weddingonly from "./Wedding/Weddingonly";

export default function Wedding() {
  (function ($) {
    /*--Scroll Back to Top Button Show--*/

    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $("#myBtn").fadeIn();
      } else {
        $("#myBtn").fadeOut();
      }
    });
  })(jQuery);
  //Click event scroll to top button jquery
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const Wedding = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <>
      <Navbar />
      <Weddingonly />
      {/* <OurGallery /> */}
      <IgdanWa />
      <Footer />
      <button
        type="button"
        onClick={Wedding}
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
