import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";
import AdminTopbar from "./AdminTopbar";
import "./addnew.css";

function GetContent() {
  const { _id } = useParams();
  const navigate = useNavigate();

  const [postingan, setPostingan] = useState(null);

  useEffect(() => {
    getUsersBE();
  }, []);

  const getUsersBE = async () => {
    try {
      const response = await axios.get(
        `https://skripsi-vaniasasikirana.onrender.com/userpage/${_id}`
      );
      const data = response.data.result;
      setPostingan(data);
      setEditedPostingan(data);
    } catch (error) {
      console.log(error);
    }
  };

  // untuk edittt get data
  const handleChange = (e) => {
    setEditedPostingan({
      ...editedPostingan,
      [e.target.name]: e.target.value,
    });
  };

  // update
  const [editedPostingan, setEditedPostingan] = useState({
    title: "",
    content: "",
    alamat_url: "",
  });

  const updatePostBE = async () => {
    try {
      const updatedPost = {
        ...editedPostingan,
        updatedAt: new Date().toISOString(),
      };

      const response = await axios.put(
        `https://skripsi-vaniasasikirana.onrender.com/userpage/${_id}`,
        updatedPost
      );
      console.log(response.data);
      getUsersBE();
      window.alert("Data berhasil diubah");
      navigate("../admin/allcontent"); // Arahkan ke halaman /allcontent setelah pembaruan berhasil
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateClick = (e) => {
    e.preventDefault();
    updatePostBE();
  };

  return (
    <>
      <div className="page-top" id="adminpagee">
        <div id="wrapper">
          <AdminSideBar />
          <AdminTopbar />
          <div className="crudd">
            <div className="ms-4">
              <h1 className="text-gray-800">Edit Content Gallery</h1>
              <br />
              <br />
              <br />
              {postingan && (
                <form>
                  <label className="form-label">ID :</label>
                  <input
                    placeholder=""
                    name="_id"
                    value={editedPostingan._id || postingan._id || ""}
                    onChange={handleChange}
                    style={{
                      borderRadius: "25px",
                      border: "1px lightgray solid",
                      paddingLeft: "8px",
                      marginLeft: "38px",
                    }}
                    readOnly
                  />
                  <br /> <br />
                  <label className="form-label">Title :</label>
                  <input
                    placeholder=""
                    name="title"
                    value={editedPostingan.title || postingan.title || ""}
                    onChange={handleChange}
                    style={{
                      borderRadius: "25px",
                      border: "1px lightgray solid",
                      paddingLeft: "8px",
                      marginLeft: "28px",
                    }}
                  />
                  <br />
                  <br />
                  <label className="form-label">Kategori :&nbsp;</label>
                  <input
                    placeholder=""
                    name="content"
                    value={editedPostingan.content || postingan.content || ""}
                    onChange={handleChange}
                    style={{
                      borderRadius: "25px",
                      border: "1px lightgray solid",
                      paddingLeft: "8px",
                    }}
                  />
                  <br /> <br />
                  <p
                    style={{
                      fontSize: "18px",
                      backgroundColor: "lightgray",
                      borderRadius: "25px",
                      padding: "10px",
                      color: "black",
                    }}
                  >
                    https://raw.githubusercontent.com/skripsi-pania/skripsi/main/public/makeup/all/
                  </p>
                  <label className="form-label">Gambar :</label>
                  <input
                    placeholder=""
                    name="alamat_url"
                    value={
                      editedPostingan.alamat_url || postingan.alamat_url || ""
                    }
                    onChange={handleChange}
                    style={{
                      borderRadius: "25px",
                      border: "1px lightgray solid",
                      paddingLeft: "8px",
                      marginLeft: "12px",
                    }}
                  />
                  <br />
                  <br />
                  <label className="form-label">
                    Created at :{" "}
                    <span style={{ marginLeft: "15px" }}>
                      {postingan.createdAt.substring(0, 10)}
                    </span>
                  </label>
                  <br />
                  <br />
                  <button onClick={handleUpdateClick}>Update</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetContent;
