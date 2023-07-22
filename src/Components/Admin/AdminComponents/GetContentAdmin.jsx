import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";
import AdminTopbar from "./AdminTopbar";
import "./addnew.css";

function GetContentAdmin() {
  const { _id } = useParams();
  const navigate = useNavigate();

  const [akun, setAkun] = useState(null);
  const [editedAkun, setEditedAkun] = useState({});

  useEffect(() => {
    getUsersBE();
  }, [_id]);

  useEffect(() => {
    console.log("akun state has changed:", akun);
  }, [akun]);

  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const getUsersBE = async () => {
    try {
      const response = await axios.get(
        `https://skripsi-vaniasasikirana.onrender.com/admin/${_id}`
      );
      const data = response.data.data;
      console.log(data);
      setAkun(data);
      setEditedAkun({ password: data.password }); // Set 'editedAkun' with the initial data from API
    } catch (error) {
      console.log(error);
      setAkun(null); // Set 'akun' to null if there's an error
    }
  };

  const handleChange = (e) => {
    setEditedAkun({
      ...editedAkun,
      [e.target.name]: e.target.value,
    });
  };

  const updatePasswordBE = async () => {
    try {
      console.log("updatePasswordBE is called");
      console.log("Edited akun:", editedAkun);

      const response = await axios.put(
        `https://skripsi-vaniasasikirana.onrender.com/admin/${_id}`,
        { password: editedAkun.password }
      );

      console.log("Server response:", response.data.data);

      // Update 'akun' state with the new password
      setAkun((prevAkun) => ({
        ...prevAkun,
        password: editedAkun.password,
      }));

      setTimeout(() => {
        window.alert("Data berhasil diubah");
        navigate("../admin/account");
      }, 100);
    } catch (error) {
      console.log("Error in updatePasswordBE:", error);
    }
  };

  const handleUpdateClick = (e) => {
    e.preventDefault();
    console.log("handleUpdateClick is called");
    console.log("editedAkun before update:", editedAkun);

    updatePasswordOnServer(editedAkun);
  };

  const updatePasswordOnServer = async (updatedPassword) => {
    try {
      console.log("Updating password for _id:", _id);

      const response = await axios.put(
        `https://skripsi-vaniasasikirana.onrender.com/admin/${_id}`,
        { password: updatedPassword.password } // Kirim hanya data password yang ingin diubah
      );

      console.log("Server response:", response.data);
      getUsersBE(); // Ambil data ulang untuk memperbarui tampilan
      console.log("Password berhasil diubah");

      // Tampilkan pesan sukses (optional)
      window.alert("Password berhasil diubah");

      // Redirect ke halaman akun setelah berhasil mengubah password (optional)
      navigate("../admin/account");
    } catch (error) {
      console.log("Error in updatePasswordOnServer:", error);
    }
  };
  return (
    <>
      <div className="page-top" id="adminpagee">
        <div id="wrapper">
          <AdminSideBar />
          <AdminTopbar />
          <div className="crudd">
            <div className="ms-4">
              <h1 className="text-gray-800">Edit Akun Admin</h1>
              <br />
              <br />
              <br />
              {akun ? (
                <form>
                  <label className="form-label">Email :</label>
                  <br />
                  <input
                    placeholder=""
                    name="email"
                    value={editedAkun.email || akun.email || ""}
                    onChange={handleChange}
                    style={{
                      borderRadius: "25px",
                      border: "1px lightgray solid",
                      paddingLeft: "8px",
                      marginLeft: "5px",
                    }}
                    readOnly
                  />
                  <br /> <br />
                  <label className="form-label">password :</label>
                  <br />
                  <input
                    placeholder=""
                    name="password"
                    value={editedAkun.password || ""}
                    onChange={handleChange}
                    style={{
                      borderRadius: "25px",
                      border: "1px lightgray solid",
                      paddingLeft: "8px",
                      marginLeft: "5px",
                    }}
                  />
                  <br />
                  <br />
                  <button onClick={handleUpdateClick} className="update">
                    Update
                  </button>
                </form>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetContentAdmin;
