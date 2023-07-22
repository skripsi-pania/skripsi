import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import "./addnew.css";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";
import AdminTopbar from "./AdminTopbar";

function AllContent() {
  const { _id } = useParams();

  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [apiUser, setApiUser] = useState([]);
  const navigate = useNavigate();

  const [user, setUser] = useState("");

  useEffect(() => {
    // refreshToken();
    getUsersBE();
  }, []);

  //urutkan berdasarkan content
  const sortPostingan = (postingan) => {
    return postingan.sort((a, b) => {
      // Urutkan berdasarkan content
      if (a.content < b.content) return -1;
      if (a.content > b.content) return 1;

      // Jika content sama, urutkan berdasarkan createdAt
      if (a.createdAt < b.createdAt) return -1;
      if (a.createdAt > b.createdAt) return 1;

      return 0;
    });
  };

  const [postingan, setPostingan] = useState([]);

  const getUsersBE = async () => {
    axios("https://skripsi-vaniasasikirana.onrender.com/userpage/")
      .then((res) => {
        const sortedPostingan = sortPostingan(res.data.data);
        console.log(sortedPostingan);
        setPostingan(sortedPostingan);
      })
      .catch((err) => console.log(err));
  };

  // ini untuk delete fix API
  const deleteUser = async (_id) => {
    try {
      await axios.delete(
        `https://skripsi-vaniasasikirana.onrender.com/userpage/${_id}`
      );
      getUsersBE();
      console.log(_id + " has been deleted");
    } catch (error) {
      console.log(error);
    }
  };

  // ini untuk get data params _id
  const historyid = useNavigate();

  const getDataparam = async (_id) => {
    try {
      const response = await axios.get(
        `https://skripsi-vaniasasikirana.onrender.com/userpage/${_id}`
      );
      const data = response.data;
      // Lakukan apa pun yang perlu dilakukan dengan data yang diperoleh
      console.log("Data pengguna:", data);
      // Navigasi ke halaman baru dengan menggunakan navigate
      navigate(`./getcontent/${_id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="page-top" id="adminpagee">
        {/* <!-- Page Wrapper --> */}
        <div id="wrapper">
          <AdminSideBar />
          <AdminTopbar />
          <div className="crudd">
            <div className="ms-4">
              <h1 className="text-gray-800" style={{ marginTop: "15px" }}>
                All Content Kategori
              </h1>
            </div>

            <table className="table  table-columns my-table tablee">
              <thead>
                <tr>
                  <th
                    style={{ width: "10px", fontSize: "16px", color: "black" }}
                  >
                    No.
                  </th>
                  <th
                    style={{ width: "100px", fontSize: "16px", color: "black" }}
                  >
                    ID
                  </th>
                  <th
                    style={{ width: "100px", fontSize: "16px", color: "black" }}
                  >
                    Title
                  </th>
                  <th
                    style={{ width: "100px", fontSize: "16px", color: "black" }}
                  >
                    Kategori
                  </th>
                  <th
                    style={{ width: "130px", fontSize: "16px", color: "black" }}
                  >
                    Image
                  </th>
                  <th
                    style={{ width: "130px", fontSize: "16px", color: "black" }}
                  >
                    Created At
                  </th>
                  <th
                    style={{ width: "130px", fontSize: "16px", color: "black" }}
                  >
                    Last Modified
                  </th>
                  <th style={{ color: "black" }}>Actions</th>
                </tr>
              </thead>
              {postingan.map((item, index) => (
                <tbody key={index}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item._id}</td>
                    <td>{item.title}</td>
                    <td>{item.content}</td>
                    <td>
                      <img
                        src={item.alamat_url}
                        style={{ width: "100px" }}
                      ></img>
                    </td>
                    <td>{item.createdAt.substring(0, 10)}</td>
                    <td>{item.updateAt.substring(0, 10)}</td>
                    <td>
                      <a
                        style={{ marginRight: "10px" }}
                        onClick={() => getDataparam(item._id)}
                      >
                        <button className="edit" title="Edit Gallery">
                          Edit
                        </button>
                      </a>
                      <a onClick={() => deleteUser(item._id)}>
                        <button className="hapus" title="Hapus Gallery">
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                      </a>
                    </td>
                  </tr>
                  <tr></tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllContent;
