import { useNavigate, useParams } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";
import AdminTopbar from "./AdminTopbar";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export default function AdminAccount() {
  const api_url = "https://testvoluntegreen.onrender.com/admin";
  const { _id } = useParams();

  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [apiUser, setApiUser] = useState([]);
  const navigate = useNavigate();

  const [user, setUser] = useState("");

  axios.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const fetchData = useCallback(async () => {
    try {
      const result = await axios.get(
        "https://skripsi-vaniasasikirana.onrender.com/admin"
      );
      setUser(result.data.data);
    } catch (err) {
      console.log(err);
    }
  });

  const getUsersBE = async () => {
    axios
      .get("https://skripsi-vaniasasikirana.onrender.com/admin/")
      .then(
        (res) => setApiUser(res.data.data)
        //    console.log(res.data.data)
      )
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // refreshToken();
    getUsersBE();
    fetchData();
  }, []);

  const deleteUser = async (_id) => {
    try {
      await axios.delete(
        `https://skripsi-vaniasasikirana.onrender.com/admin/${_id}`
      );
      getUsersBE();
      console.log(" ID : " + _id + " has been deleted");
    } catch (error) {
      console.log(error);
    }
  };

  const getDataAdmin = async (_id) => {
    try {
      const response = await axios.get(
        `https://skripsi-vaniasasikirana.onrender.com/admin/${_id}`
      );
      const data = response.data;
      // Lakukan apa pun yang perlu Anda lakukan dengan data yang diperoleh
      console.log("Data pengguna:", data);
      // Navigasi ke halaman baru dengan menggunakan navigate
      navigate(`./getakun/${_id}`);
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
                Manage Admin Account
              </h1>
            </div>

            <table className="table  table-columns my-table tablee">
              <thead>
                <tr>
                  {/* <th
                    style={{ width: "10px", fontSize: "16px", color: "black" }}
                  >
                    No.
                  </th> */}
                  <th
                    style={{ width: "100px", fontSize: "16px", color: "black" }}
                  >
                    ID
                  </th>
                  <th
                    style={{ width: "100px", fontSize: "16px", color: "black" }}
                  >
                    Username
                  </th>
                  <th
                    style={{ width: "100px", fontSize: "16px", color: "black" }}
                  >
                    Email
                  </th>
                  <th
                    style={{ width: "130px", fontSize: "16px", color: "black" }}
                  >
                    Password
                  </th>

                  <th style={{ color: "black" }}>Actions</th>
                </tr>
              </thead>
              {apiUser.map((item, index) => (
                <tbody key={index}>
                  <tr>
                    {/* <td>{index + 1}</td> */}
                    <td>{item._id}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>

                    <td>
                      <a
                        style={{ marginRight: "10px" }}
                        onClick={() => getDataAdmin(item._id)}
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
