import Footer from "./Footer";
import IgdanWa from "./IgdanWa";
import Navbar from "./Navbar";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <div class="container text-center">
        <div class="row align-items-start">
          <div class="col-5">
            <img
              src="./IMG_0130.JPG"
              className="coverku0"
              style={{ marginLeft: "-13px", borderRadius: "35px" }}
              width={425}
            />
          </div>
          <div class="container-fluid col row" style={{ marginTop: "20px" }}>
            <center>
              <li
                className="introone"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  marginBottom: "60px",
                }}
              >
                <h1>About Us</h1>
              </li>
            </center>
            <div class="col-6">
              <img
                src="./IMG_0115.jpg"
                className="coverku0"
                style={{ marginLeft: "-13px", borderRadius: "35px" }}
                width={275}
              />
            </div>
            <div class="col-5" style={{ paddingTop: "30px" }}>
              text
            </div>

            <div class="col-5" style={{ paddingTop: "30px" }}>
              textttt uga
            </div>
            <div class="col-7" style={{}}>
              <center>
                <img
                  src="./IMG_0129.jpg"
                  className="coverku0"
                  style={{ marginLeft: "-13px", borderRadius: "35px" }}
                  width={275}
                />{" "}
              </center>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <IgdanWa />
      <Footer />
    </>
  );
}
