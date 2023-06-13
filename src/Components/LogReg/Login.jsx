import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AdminPage from "../Admin/AdminPage";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Login = () => {
  const cekEmail = localStorage.getItem("account");
  const username = localStorage.getItem("username");
  const cekPassword = localStorage.getItem("pass");
  const token = localStorage.getItem("token");
  const roles = localStorage.getItem("roles");

  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [roles, setRoles] = useState("");

  const [users, setUsers] = useState([]);
  const [requestError, setRequestError] = useState();

  const fetchData = useCallback(async () => {
    try {
      const result = await axios.get(`${api_url}`);
      setUsers(result.data.data);
    } catch (err) {
      setRequestError(err.message);
    }
  });
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("halo");

    try {
      const respons = await axios.post(
        "https://skripsi-vaniasasikirana.onrender.com/signin",
        {
          email: email,
          roles: roles,
          password: password,
        }
      );

      console.log(respons);
      console.log(respons.data.token);
      console.log(respons.data.username);
      console.log(respons.data.email);
      console.log(respons.data.roles);
      const obj = Object.values(respons.data.roles);

      localStorage.setItem("token", respons.data.token);
      localStorage.setItem("username", respons.data.username);

      console.log("bawah obj");
      console.log(obj);
      if (obj[0] === "646a007b18a2af59b912f2cd") {
        localStorage.setItem("roles", roles);
        localStorage.setItem("account", email);
        localStorage.setItem("username", respons.data.username);
        localStorage.setItem("roles", obj);

        // console.log(roles);
        alert("Sedang memuat, silahkan menunggu.");
        navigation("/admin/dashboard");
        window.location.reload();
      } else {
        localStorage.setItem("account", email);
        alert("Loading");
        // localStorage.setItem("pass", password);
        navigation("/admin");
      }
      // localStorage.setItem("pass", password);
      // navigation("/dashboard");
    } catch (error) {
      alert("Mohon Check kembali data Anda.");
    }

    // Interceptor untuk set header Authorization dengan Bearer token dari localStorage
    axios.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("token");
        if (token) {
          config.headers.authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  };

  return (
    <>
      {!cekEmail && !cekPassword ? (
        <>
          <Navbar />
          <div className="container-xxxl" style={{ marginTop: "100px" }}>
            <div className="row" id="logre" style={{ marginBottom: "-60px" }}>
              <div className="col volunteelore">
                <img
                  src="/makeup/LoginBanner.PNG"
                  className="coverku0"
                  style={{ marginLeft: "-13px", marginTop: "-135px" }}
                  width={725}
                />{" "}
                {/* <img id="logre"  src="/LogresAssets/img/Mountain.jpg" /> */}
              </div>

              <div className="col justify-right formmm">
                <form
                  id="form"
                  className="col-10 formkotakk"
                  // style={{ border: "ridge" }}
                >
                  <br />
                  <br />
                  <h1
                    className=""
                    style={{ marginLeft: "130px", marginBottom: "50px" }}
                  >
                    LOGIN ADMIN
                  </h1>
                  <div className="col">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email-login"
                      aria-describedby="emailHelp"
                      value={email}
                      onChange={handleEmail}
                      style={{ width: "500px" }}
                    />
                  </div>
                  <div className="col">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password-login"
                      value={password}
                      onChange={handlePassword}
                      style={{ width: "500px" }}
                    />
                  </div>
                  <div className="text-center d-grid gap-2">
                    <br />
                    <Link
                      style={{
                        textDecoration: "none",
                        textAlign: "left",
                        marginLeft: "215px",
                      }}
                    >
                      <button
                        type="submit"
                        className="btn btn-success"
                        // style="--bs-bg-opacity: 0.5"
                        id="btn-login"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </Link>
                    <Link
                      to={"/register"}
                      style={{ textAlign: "left", textDecoration: "none" }}
                    >
                      Belum punya akun?
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <>
          <AdminPage />
        </>
      )}
    </>
  );
};
export default Login;
