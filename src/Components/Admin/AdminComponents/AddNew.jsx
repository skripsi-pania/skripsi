import { useCallback, useEffect, useState } from "react";
import "./addnew.css";
import axios from "axios";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AddNew = () => {
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
  const [username, setPostedBy] = useState(""); // ini untuk _id dari localstorage
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

  const handleBtn = async (e) => {
    e.preventDefault();
    console.log("huhuhu");
    try {
      console.log("huhuhu dalem");

      const result = await axios.post(
        "https://skripsi-vaniasasikirana.onrender.com/userpage/",
        {
          username: username,
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

  const getUsersBE = async () => {
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
      <div className="" id="">
        <div className="">
          <div className="">
            <a href="#popup" style={{ textDecoration: "none" }}>
              Tambahkan Gallery
            </a>
          </div>
        </div>
      </div>

      <br />

      <div className="popup" id="popup">
        <div className="popup__content">
          <div className="cardKomunitas">
            <div className="card-body d-flex flex-row">
              <div className="contentUpload">
                {/* ini username jir */}
                <input
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="1"
                  placeholder="username"
                  value={inputValue}
                  htmlFor="username"
                  onChange={setInputValue}
                  disabled
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
              placeholder="title"
              value={title}
              htmlFor="title"
              onChange={handleTitle}
            />

            <input
              className="form-control"
              id="exampleFormControlTextarea2"
              rows="6"
              placeholder="Bagikan kondisi lingkungan sekitar Anda"
              value={content}
              onChange={handleContent}
            ></input>
            <input
              className="form-control"
              id="exampleFormControlTextarea3"
              rows="1"
              placeholder="Lokasi kejadian (Kota, Provinsi)"
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
              <button className="buttonPost" type="submit" onClick={handleBtn}>
                Post
              </button>
            </center>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNew;
