import OurGallery from "./Dashboard/OurGallery";
import Footer from "./Footer";
import IgdanWa from "./IgdanWa";
import Navbar from "./Navbar";
import CardPC from "./PrivateClass/CardPC";

export default function PrivateClass() {
  return (
    <>
      <Navbar />
      <CardPC />
      <IgdanWa />
      <OurGallery />
      <Footer />
    </>
  );
}
