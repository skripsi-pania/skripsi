import React from "react";
import Cover from "./Dashboard/Cover";
import GridMakeup from "./Dashboard/GridMakeup";
import OurGallery from "./Dashboard/OurGallery";
import Footer from "./Footer";
import Navbar from "./Navbar";
import IgdanWa from "./IgdanWa";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <Cover />
      <GridMakeup />
      <OurGallery />
      <Footer />
      <IgdanWa />
    </div>
  );
}

export default Dashboard;
