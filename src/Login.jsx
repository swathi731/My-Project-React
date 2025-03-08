import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  let username = useRef(null);
  let password = useRef(null);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let Logincheck = () => {
    if (username.current.value === "Gopi" && password.current.value === "Gopi@123") {
      dispatch(login(username.current.value));
      navigate("/home");
    } else {
      alert("❌ Your Credentials are incorrect. Please try again!");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ background: "linear-gradient(120deg, #84fab0, #8fd3f4)" }}>
      <div className="card p-4 shadow-lg rounded" style={{ width: "350px", backgroundColor: "#fff" }}>
        <h2 className="text-center text-primary">
          <i className="bi bi-person-circle"></i> Login
        </h2>
        <div className="mt-3">
          <label className="form-label"><i className="bi bi-person-fill"></i> Username</label>
          <input type="text" ref={username} className="form-control shadow-sm" placeholder="Enter your username" />
        </div>

        <div className="mt-3">
          <label className="form-label"><i className="bi bi-lock-fill"></i> Password</label>
          <input type="password" ref={password} className="form-control shadow-sm" placeholder="Enter your password" />
        </div>

        <button
          className="btn btn-danger w-100 mt-4 shadow"
          onClick={Logincheck}
          style={{ fontWeight: "bold" }}
        >
          <i className="bi bi-box-arrow-in-right"></i> Sign In
        </button>
      </div>
    </div>
  );
}

export default Login;