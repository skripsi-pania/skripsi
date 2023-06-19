import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./addnew.css";
import { Navigate, useNavigate } from "react-router-dom";

function AdminDashboard() {
  const api_url = "https://skripsi-vaniasasikirana.onrender.com/admin";
  const [totalSum, setTotalSum] = useState(0);
  const getUsersBE = async () => {
    axios
      .get(api_url)
      .then(
        (res) => setTotalSum(res.data.data.length)
        // console.log(res.data.data)
      )
      .catch((err) => console.log(err));
  };

  // useEffect(() => {
  //   getUsersBE();
  // }, []);

  // ----------------------------- ini untuk register admin
  const [username, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [roles, setRoles] = useState("admin");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const handleNama = (e) => {
    setNama(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleRoles = (e) => {
    setRoles(e.target.value);
  };
  const handlePassword1 = (e) => {
    setPassword1(e.target.value);
  };
  const handlePassword2 = (e) => {
    setPassword2(e.target.value);
  };

  const handleBtn = async (e) => {
    e.preventDefault();

    // Verifikasi password1 dan password2
    if (password1 !== password2) {
      alert("Password tidak sesuai");
      return;
    }

    try {
      await axios.post("https://skripsi-vaniasasikirana.onrender.com/signup", {
        username: username,
        roles: [roles],
        email: email,
        password: password2,
      });
      alert("Register Berhasil");
      // navigation("/");
    } catch (error) {
      alert("Mohon periksa kembali data Anda.");
    }

    console.log("woooi");
  };

  // -------------------------- ini untuk ad new gallery
  const [content, setContent] = useState("");
  const [alamat_url, setalamat] = useState("");

  const [apiUser, setApiUser] = useState([]);
  const [saveImage, setSaveImage] = useState({});
  const account = localStorage.getItem("account");
  const storedValue = localStorage.getItem("_id");

  const navigate = useNavigate();

  const handleTitle = (e) => {
    setTitlee(e.target.value);
  };

  const handleId = () => {
    setInputValue(e.target.value);
  };

  const handleUsername = () => {
    setInputValueUsername(e.target.value);
  };
  const handleContent = (e) => {
    setContent(e.target.value);
  };
  const handleLokasi = (e) => {
    setalamat(e.target.value);
  };

  // berhasill untuk masukin ke state untuk id dri local
  const [username2, setPostedBy] = useState(""); // ini untuk _id dari localstorage
  const [inputValue, setInputValue] = useState("");

  const [title, setTitlee] = useState(""); // ini untuk username dari lcoalstorage
  const [inputValueusername, setInputValueUsername] = useState("");

  useEffect(() => {
    getUsersBE();

    // yayyy ini berhasil untuk get local id ke stateeeeee
    const storedData = localStorage.getItem("username");
    if (storedData !== null) {
      setPostedBy(storedData);
      setInputValue(storedData);
    }
    // ini untuk local usernameeee
    // const storedDataUsername = localStorage.getItem("username");
    // if (storedDataUsername !== null) {
    //   setUsername(storedDataUsername);
    //   setInputValueUsername(storedDataUsername);
    // }
  }, []);

  const handleBtn2 = async (e) => {
    e.preventDefault();
    console.log("huhuhu");
    try {
      console.log("huhuhu dalem");

      const result = await axios.post(
        "https://skripsi-vaniasasikirana.onrender.com/userpage/",
        {
          username: username2,
          title: title,
          content: content,
          alamat_url: alamat_url,
          //   image: image,
        }
      );
      console.log(result);
      alert("Berhasil Posting! Silahkan Refresh Web");
      console.log("berhasill posting");
      // navigation("/");
    } catch (error) {
      alert("Mohon periksa kembali data Anda.");
      console.log("gagal posting");
    }
  };

  axios.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const getUsersBE2 = async () => {
    axios
      .get("https://skripsi-vaniasasikirana.onrender.com/userpage/")
      .then(
        (res) => setApiUser(res.data.data)
        //    console.log(res.data.data)
      )
      .catch((err) => console.log(err));
  };
  return (
    <>
      {/* <!-- Begin Page Content --> */}
      <div className="dashboardd">
        {/* <!-- Page Heading --> */}

        <div className="row" id="logre">
          <div className="col-1 volunteelore">
            {/* <h1 style={{ textAlign: "left", paddingLeft: "5rem" }}>
              Add new Admin
            </h1> */}
            {/* <img id="logre"  src="/LogresAssets/img/Mountain.jpg" /> */}
          </div>

          <div className="col formm ">
            <section
              className="container-xxl"
              style={{ display: "flex", zIndex: "2" }}
            >
              <div className="row">
                <div className="container">
                  <div className="ms-4">
                    <h1 className="text-gray-800">Dashboard</h1>
                  </div>
                  <br />
                  <br />
                  {/*                   
                  <br />
                  <br /> */}
                  <form
                    id="form "
                    className="col-12  registerkotakk"
                    style={{
                      border: "solid",
                      borderRadius: "25px",
                      padding: "30px",
                    }}
                  >
                    <h4 className="text-center">Add New Account Admin</h4>
                    <br />
                    <div className="col">
                      <label className="form-label">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        id="Uname-regis"
                        value={username}
                        onChange={handleNama}
                      />
                    </div>
                    <div className="col">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email-regis"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={handleEmail}
                      />
                    </div>
                    <div className="col">
                      <label className="form-label">Role</label>
                      <input
                        type="text"
                        className="form-control"
                        id="roles-regis"
                        aria-describedby="roles"
                        value={roles} // Menggunakan value dari useState
                        onChange={handleRoles}
                        readOnly // Membuat input menjadi readonly
                      />
                    </div>

                    <div className="col">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password1-regis"
                        value={password1}
                        onChange={handlePassword1}
                      />
                    </div>
                    <div className="col">
                      <label className="form-label">Re-Enter Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password2-regis"
                        value={password2}
                        onChange={handlePassword2}
                      />
                    </div>
                    <br />
                    <div className="text-center d-grid gap-2">
                      <button
                        type="submit"
                        className="btn text-center btn-success"
                        // style="--bs-bg-opacity: .5;"
                        id="btn-regis"
                        onClick={handleBtn}
                      >
                        Submit
                      </button>
                      {/* <Link
                        to={"/"}
                        className="sudahpunya"
                        style={{ textDecoration: "none" }}
                      >
                        Sudah punya akun?
                      </Link> */}
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* <!-- /.container-fluid --> */}
        <div className="ms-5 pohonadmin">
          <br></br>
          <br></br>
          <br></br>
          {/* <img
            className="d-absolute "
            src="img/logofix.png"
            alt="VolunteGreen"
            width={350}
            
          /> */}
        </div>
        <div className="row" style={{ width: "250px", marginTop: "80px" }}>
          <div
            className="col-12 card cardd"
            style={{ height: "10rem", marginLeft: "50px" }}
          >
            <div className="card-body">
              <h5 className="card-title">Total Pengguna Akun</h5>
              <hr />
              {/* <p
                className="card-subtitle mb-2 text-muted"
                style={{ fontSize: "12px" }}
              >
                Total
              </p> */}
              <p className="card-text">{totalSum} </p>
            </div>
          </div>
          <br />
          <br />
          {/* ////////batas new gallery */}
          <div className="col" id="">
            <div className="">
              <div className="">
                <a href="#popup" style={{ textDecoration: "none" }}>
                  <button>Tambahkan Gallery</button>
                </a>
              </div>
            </div>
          </div>

          <br />

          <div className="popup" id="popup" style={{ zIndex: "99" }}>
            <div className="popup__content">
              <div className="cardKomunitas">
                <div className="card-body d-flex flex-row">
                  <div className="contentUpload">
                    {/* ini username jir */}
                    <h4>Tambah Gallery Image</h4>
                    <br />

                    <input
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="1"
                      placeholder="username"
                      value={inputValue}
                      htmlFor="username2"
                      onChange={setInputValue}
                      disabled
                      style={{ marginLeft: "45px" }}
                    />
                  </div>
                  <a
                    href="#unPopup"
                    className="unPop"
                    style={{ textDecoration: "none" }}
                  >
                    <button className="closeTag">x</button>
                  </a>
                </div>
                {/* anggep ini title */}
                <input
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="1"
                  placeholder="judul file"
                  value={title}
                  htmlFor="title"
                  onChange={handleTitle}
                />

                <input
                  className="form-control"
                  id="exampleFormControlTextarea2"
                  rows="6"
                  placeholder="content category (wedding/engagement/graduation)"
                  value={content}
                  onChange={handleContent}
                ></input>
                <input
                  className="form-control"
                  id="exampleFormControlTextarea3"
                  rows="1"
                  placeholder="nama file (FORMAT, jpg dan png only)"
                  value={alamat_url}
                  onChange={handleLokasi}
                ></input>
                {/* <input
              type="input"
              id="input"
              title="img addres url"
              className="col-9 d-flex flex-row"
              placeholder="Paste here Image Address"
              value={image}
              onChange={handleImage}
              style={{ marginLeft: "80px", fontSize: "1vw" }}
            ></input> */}

                <center>
                  <button
                    className="buttonPost"
                    type="submit"
                    onClick={handleBtn2}
                  >
                    Post
                  </button>
                </center>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
