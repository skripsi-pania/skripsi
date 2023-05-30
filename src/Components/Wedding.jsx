import OurGallery from "./Dashboard/OurGallery";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Weddingonly from "./Wedding/Weddingonly";

export default function Wedding() {
  return (
    <>
      <Navbar />
      <Weddingonly />
      {/* <OurGallery /> */}
      <Footer />
    </>
  );
}
